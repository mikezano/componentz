<template lang="pug">
.vuer
	.vuer__fader
		.vuer__links(v-if="$route.params.single_component == null")
			button.vuer__examples(title="See examples" @click="setTheEl")
				router-link(:to="route" tag="div")
					icon(name="code" scale="2")
			button.vuer__copy(title="Copy SCSS+PUG" @click="getSCSSPUG")
				icon(name="copy" scale="2")
			button.vuer__copy(title="Copy HTML+CSS")
				icon(name="copy" scale="2")

		.vuer__header
			| {{name.replace(/_/g,' ')}}
		.vuer__component
			component(:is="component")
		.vuer__scss
			label SCSS:
			pre.language-css
				code(v-html="scss" contenteditable="true")
		.vuer__pug
			label PUG:
			pre.language-js
				code(v-html="pug"  contenteditable="true")
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { mapGetters, mapMutations } from 'vuex';

@Component({
  computed: {
	...mapGetters(['getComponent', 'getHtmlSingleFile']),
	...mapMutations(['setFromEl']),
  },
})
export default class Vuer extends Vue {

	@Prop()
	public name!: string;

	public component: any = null;
	public scss: string = '';
	public pug: string =  '';
	public mixin: string = '';
	public route: string = '';
	public pugRE: RegExp =  new RegExp('(?<=<template lang="pug">).*?(?=</template>)', 's');
	public scssRE: RegExp =  new RegExp('(?<=<style lang="scss" scoped>).*?(?=</style>)', 's');

	public getComponent!: (name: string) => any;
	public getHtmlSingleFile!: (name: string) => any;
	public setFromEl!: (name: string) => any;

	public mounted(): void {
		this.getSources();
		this.route = `/style_guide/${this.$route.params.components}/${this.name}`;
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
	public getSources() {
		this.component = this.getComponent(this.name).default;
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
	top: 1.5rem;
	right: 1rem;
	.vuer__examples,
	.vuer__copy {
		width: 50px;
	}
}
.vuer__examples,
.vuer__copy {
	border: none;
	background: none;
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
		text-transform: uppercase;
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
