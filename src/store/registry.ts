import { debug } from 'util';


const ctx = require.context('../../src/', true, /.*.vue$/);
const ctxHtml = require.context('!!raw-loader!../../src/', true, /.*.html$/);
const ctxraw = require.context('!!raw-loader!../../src/', true, /.*.vue$/);

interface Simple {
	source: string;
}
const components: any = ctx.keys().map(ctx);
const componentsSource = ctxraw.keys().map(ctxraw);

const componentsHtml: any = ctxHtml.keys().map(ctxHtml);
const files = require.context(`../components/StyleGuide/`, true, /\.vue$/);

const htmlFiles = require.context(`../mixifier/`, true, /\.html$/);
for (let i = 0; i < components.length; i++) {
	components[i].source = componentsSource[i];
}
const singleFileHash = new Map<string, string>();

htmlFiles.keys().forEach((key: string, index: number) => {
	const path = key.replace(/(\.\/|\.html)/g, '');
	const file = path.substr(path.indexOf('/') + 1, path.length);

	singleFileHash.set(file, componentsHtml[index]);
});

function get(name: string) {
	for (const c of components) {
		if (!c.default.options) {
			continue;
		}
		if (c.default.options.name === name) {
			return c;
		}
	}
	return null;
}

function getHtmlSingleFile(name: string) {
	for (const c of componentsHtml) {
		if (c.name === name) {
			return c;
		}
	}
}

function buildHtmlSingleFiles() {
	const hash = new Map<string, string[]>();
	// Loading file names from a folder
	htmlFiles.keys().forEach((key: string, index: number) => {
		const path = key.replace(/(\.\/|\.html)/g, '');
		const folder = path.substr(0, path.indexOf('/'));
		const file = path.substr(path.indexOf('/') + 1, path.length);

		const currentFolder = hash.get(folder);
		if (!currentFolder) {
			hash.set(folder, new Array<string>());
		}
		currentFolder!.push(file);
	});
	return hash;
}

function buildRegistry() {
	const hash = new Map<string, string[]>();
	// Loading file names from a folder
	files.keys().forEach((key: string) => {
		const path = key.replace(/(\.\/|\.vue)/g, '');
		const folder = path.substr(0, path.indexOf('/'));
		const file = path.substr(path.indexOf('/') + 1, path.length);

		let currentFolder = hash.get(folder);
		if (!currentFolder) {
			hash.set(folder, new Array<string>());
			currentFolder = hash.get(folder);
		}

		currentFolder!.push(file);
	});
	return hash;
}

export default {
	components,
	componentsHtml,
	singleFileHash,
	get,
	buildRegistry,
	buildHtmlSingleFiles,
};
