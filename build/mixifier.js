const styleGuidePath = './src/components/StyleGuide/';
const fs = require('fs');
const mkdirp = require('mkdirp');
const sass = require('node-sass');
const pug = require('pug');
var getDirName = require('path').dirname;
const mixin_regex = new RegExp('@mixin[\\s\\S]*end');
const sass_regex = new RegExp('<style lang="scss" scoped>([\\s\\S]*)</style>');
const pug_regex = new RegExp('<template lang="pug">([\\s\\S]*)</template>');
const vue_regex = new RegExp('<template lang="pug">[\\s\\S]*</template>');

function walkSync(dir, filelist) {
	var fs = fs || require('fs'),
		files = fs.readdirSync(dir);
	filelist = filelist || [];
	files.forEach(function(file) {
		if (fs.statSync(dir + file).isDirectory()) {
			filelist = walkSync(dir + file + '/', filelist);
		} else {
			filelist.push({ file: file, path: dir + file });
		}
	});
	return filelist;
}

function compile_sass(contents) {
	let sass_code = contents.match(sass_regex);
	return sass.renderSync({
		outputStyle: 'expanded',
		data: sass_code[1],
		importer: function(url, prev, done) {
			var contents = fs.readFileSync(
				`./src/${url.replace('../../../', '')}.scss`,
				'utf8',
			);
			return { contents: contents };
		},
	});
}

function compile_pug(contents) {
	let pug_markup = contents.match(pug_regex);
	let html_markup = pug.render(pug_markup[1], { pretty: true });
	return html_markup;
}

function write_single_file(css, html, path) {
	let data = `<div>\n\n  <style type="text/css">\n${css.replace(
		/^/gm,
		'    ',
	)}\n  </style>\n${html.replace(/^/gm, '  ')}\n\n</div>`;
	console.log('Zano', path);
	mkdirp(getDirName(path), function(err) {
		if (err) return cb(err);
		fs.writeFileSync(`${path}.html`, data);
	});
	console.log(`${path}.html saved!`);
}

function createMarkupFile(path, markup) {
	fs.writeFile(path, markup, function(err) {
		if (err) {
			return console.log(err);
		}
		console.log(`${path} saved!`);
	});
}
//================================================
//================== SCRIPT ======================
//================================================

let mixins_result = '';

//add the colors
var colors = fs.readFileSync('./src/sass/colors.scss', 'utf8');
mixins_result += colors;
let files = walkSync(styleGuidePath);
console.log(files);
files.forEach(function(file) {
	var contents = fs.readFileSync(file.path, 'utf8');
	let result = contents.match(mixin_regex);
	let package_path = `./src/mixifier/${file.path
		.replace(styleGuidePath, '')
		.replace('.vue', '')}`;

	let css_markup = compile_sass(contents);
	let html_markup = compile_pug(contents);
	let pug_markup = contents.match(pug_regex);
	let vue_markup = contents.match(vue_regex);

	// console.log('writing file');
	write_single_file(css_markup.css.toString(), html_markup, package_path);

	//Aggregate all mixins to later save in one file
	mixins_result += result != null ? result + '\n\r' : '';

	console.log('writing file');
	mkdirp(getDirName(package_path), function(err) {
		if (err) return err;

		//createMarkupFile(`${package_path}.pug`, pug_markup[1]);
		//createMarkupFile(`${package_path}.vue`, vue_markup);
	});
});

const ads_mixer = './src/mixifier/ads_mixer.scss';

mkdirp(getDirName(ads_mixer), function(err) {
	if (err) return cb(err);
	fs.writeFile('./src/mixifier/ads_mixer.scss', mixins_result, function(err) {
		if (err) {
			return console.log(err);
		}
		console.log('The file was saved!');
	});
});
