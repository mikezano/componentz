<template lang="pug">
.container
	p 
		| With BEM you organize your html into a more logical pieces
		| consisting of Block, Element, Modifier (hence B.E.M) .

	p 1. Blocks are the foundation of your component (lets say 'fancy-button')
	p 2. Elements are parts of the 'fancy-button' In this case lets say we will have 2 elements. it we will have to 'elements'.  An 'icon' and 'text'. 
	p 2.a. 'icon' - our visual representation
	p 2.a  'text' explaining what the fancy button will say
	p 3. Modifiers become the ....for example 'hover'

	p The basic html structure becomes
	textarea
		| <div class='fancy-button'>
		|   <div class='fancy-button__icon'></div>
		|   <div class='fancy-button__text'></div>
		| </div>

	p the markup can be whatever you wish
	vue-markdown(source="i am a ~~tast~~ **test**.") 
</template>

<script lang="ts">
const bem = require.context('!!raw-loader!../../src/views/', true, /.*.md/);

import { Component, Vue } from 'vue-property-decorator';
@Component({ name: 'Bem' })
export default class Bem extends Vue {
	public mounted() {
		var reader = new FileReader();
		// reader.onload = e => {
		// 	console.log(e.target.result);
		// };
		// reader.readAsText('test.md');
		// reader.onload = (function('test.md') {
		// 	return function(e) {
		// 		// Render thumbnail.
		// 		// var span = document.createElement('span');
		// 		// span.innerHTML = [
		// 		// 	'<img class="thumb" src="',
		// 		// 	e.target.result,
		// 		// 	'" title="',
		// 		// 	//escape(theFile.name),
		// 		// 	'"/>',
		// 		// ].join('');
		// 		// document.getElementById('list').insertBefore(span, null);
		// 	};
		// })(f);
	}
}
</script>

<style lang="scss" scoped>
@import '../sass/global';
</style>
