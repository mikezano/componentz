<template lang="pug">
.vuer(:id="displayName")
	.vuer__content
		.vuer__header
			.vuer__title
				| {{displayName | humanize}}
			button.vuer__code(title="See code" @click="toggleCode")
				.vuer-link
					icon(name="code" scale="1")
					span Code
			button.vuer__copy(title="Copy Code" @click="getSCSSPUG")
				.vuer-link
					icon(name="copy" scale="1")
					span Copy
		.vuer__examples(v-if="component")
			.default
				component(v-if="component" :is="component.default")
			component(v-if="componentExamples" :is="componentExamples.default")
		div(v-show="isCodeVisible")
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
		//name: 'doExamplesExist',
	},
})
export default class Vuer extends Vue {
	@Prop() public name!: string;

	public component: any = null;
	public componentExamples: any = null;
	public scss: string = '';
	public pug: string = '';
	public mixin: string = '';
	public route: string = '';
	public displayName: string = '';
	public doExamplesExist: boolean = false;
	public isCodeVisible: boolean = false;

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
		this.getExampleSources();
		this.displayName = this.name || this.$route.params.single_component;
		this.route = `/StyleGuide/${this.$route.params.components}/${
			this.name
		}`;

		this.doExamplesExist =
			this.getComponent(this.displayName + 'Examples') != null;
	}

	public toggleCode(): void {
		this.isCodeVisible = !this.isCodeVisible;
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
		// Add the text.
		element.value = htmlSingleFile;
		// Add it to the document so that it can be selected.
		document.body.appendChild(element);
		// select all content of element
		element.select();
		// Execute the copy command.
		document.execCommand('copy');
		// Remove the element to keep the document clean.
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

	public getExampleSources() {
		if (this.component)
			this.componentExamples = this.getComponent(this.name + 'Examples');
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
.vuer__code,
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
	width: 30rem;

	&__component {
		margin: 2rem 0;
	}

	&__examples {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 20px;
	}

	&__header {
		font-weight: bold;
		font-size: 1rem;
		display: flex;
		align-items: center;
	}

	&__title {
		margin-right: auto;
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

.vuer-link {
	display: flex;
	align-items: center;
	text-shadow: none;

	.fa-icon {
		padding: 0 4px;
	}
}
</style>
