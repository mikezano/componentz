<template lang="pug">
.vuer(:id="displayName")
	.vuer__content
		.vuer__links(v-if="$route.params.single_component == null")
			button.vuer__examples(title="See examples" @click="setTheEl" v-if="doExamplesExist")
				router-link(:to="route" tag="div")
					icon(name="code" scale="1.6")
			button.vuer__copy(title="Copy SCSS+PUG" @click="getSCSSPUG")
				icon(name="copy" scale="1.6")

		.vuer__header
			| {{displayName | humanize}}
		.vuer__component
			component(v-if="component" :is="component.default")
		.vuer__scss
			label SCSS:
			pre
				code.language-css(v-html="scss" contenteditable="true")
		.vuer__pug
			label PUG:
			pre
				code.language-js(v-html="pug"  contenteditable="true")
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { mapGetters, mapMutations } from 'vuex';

@Component({
	computed: {
		...mapGetters(['getComponent', 'getHtmlSingleFile']),
		...mapMutations(['setFromEl']),
	},
	watch: {
		name: 'doExamplesExist',
	},
})
export default class Vuer extends Vue {
	@Prop() public name!: string;

	public component: any = null;
	public scss: string = '';
	public pug: string = '';
	public mixin: string = '';
	public route: string = '';
	public displayName: string = '';
	public doExamplesExist: boolean = false;

	public pugRE: RegExp = new RegExp(
		'(?<=<template lang="pug">).*?(?=</template>)',
		's',
	);
	public scssRE: RegExp = new RegExp(
		'(?<=<style lang="scss" scoped>).*?(?=</style>)',
		's',
	);

	public getComponent!: (name: string) => any;
	public getHtmlSingleFile!: (name: string) => any;
	public setFromEl!: (name: string) => any;

	public mounted(): void {
		this.getSources();
		this.displayName = this.name || this.$route.params.single_component;
		this.route = `/StyleGuide/${this.$route.params.components}/${
			this.name
		}`;

		this.doExamplesExist =
			this.getComponent(this.displayName + 'Examples') != null;
	}

	public setTheEl() {
		this.$store.commit('toggleIsTransitioning'); // true
		this.$store.commit('setFromEl', this.$el);
	}

	public getSCSSPUG() {
		// https://hackernoon.com/you-need-to-discover-the-awesome-clipboard-web-api-12b248d05dd3
		const htmlSingleFile = this.getHtmlSingleFile(this.name);
		// Create the textarea input to hold our text.
		const element = document.createElement('textarea');
		element.value = htmlSingleFile;
		// Add it to the document so that it can be focused.
		document.body.appendChild(element);
		// Focus on the element so that it can be copied.
		element.focus();
		element.setSelectionRange(0, element.value.length);
		// Execute the copy command.
		document.execCommand('copy');
		// Remove the element to keep the document clear.
		document.body.removeChild(element);
	}

	// public doExamplesExist(): boolean {
	// 	console.log('Zano: ', name);
	// 	if (this.name == ' ') {
	// 		return false;
	// 	}

	// 	const result = this.getComponent(this.name + 'Examples');
	// 	console.log(result);
	// 	return result != null;
	// }
	public getSources() {
		this.component = this.getComponent(
			this.name || this.$route.params.single_component + 'Examples',
		);
		const source = this.component.source.replace(/\t/g, '  ');

		this.pug = this.extractCode(source, this.pugRE);
		this.scss = this.extractCode(source, this.scssRE);
	}

	public extractCode(source: string, re: RegExp) {
		const code = source.match(re);
		const result = code![0].replace(/\n/g, ' ').trim();
		return result;
	}
}
</script>


<style lang="scss" scoped>
@import '../../sass/global.scss';

.vuer__links {
	display: flex;
	position: absolute;
	justify-content: flex-end;
	top: 1rem;
	right: 1rem;
}
.vuer__examples,
.vuer__copy {
	border: none;
	background: none;
	transition: transform 0.1s ease-in;
	text-shadow: 2px 2px 4px gray;

	&:hover {
		color: map-get($colors, 'vue-green');
		cursor: pointer;
		transform: scale(1.2);
	}
}

.vuer {
	padding: 1rem;
	margin-bottom: 3rem;
	border: 1px solid lightgray;
	position: relative;
	background-color: hsla(0, 0%, 0%, 0.05);
	width: 40rem;

	&__component {
		margin: 2rem 0;
	}

	&__header {
		font-weight: bold;
		font-size: 2rem;
	}

	&__scss,
	&__pug {
		padding: 0;

		label {
			margin: 0;
			text-transform: uppercase;
			font-weight: bold;
		}

		pre {
			max-height: 20rem;
			overflow: auto;
		}
	}
}
</style>
