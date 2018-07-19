<template lang="pug">

.examples
	.default
		.draw-in
			svg.draw-in__svg
				symbol#text
				text.draw-in__ads( x="50%" y="98%" text-anchor="middle") AD&S
				use.text(xlink:href='#text')
			.draw-in__presents Presents
			.draw-in__dots
				.draw-in__dot
				.draw-in__dot
				.draw-in__dot
	.red
		.draw-in
			svg.draw-in__svg
				symbol#bluewords
				text.draw-in__ads( x="50%" y="98%" text-anchor="middle") Zano
				use.bluewords(xlink:href='#bluewords')
			.draw-in__presents Presents
			.draw-in__dots
				.draw-in__dot
				.draw-in__dot
				.draw-in__dot
	.green
		.draw-in
			svg.draw-in__svg
				symbol#bluewords
				text.draw-in__ads( x="50%" y="98%" text-anchor="middle") Green
				use.bluewords(xlink:href='#bluewords')
			.draw-in__presents Presents
			.draw-in__dots
				.draw-in__dot
				.draw-in__dot
				.draw-in__dot
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({ name: 'DrawInExamples' })
export default class DrawInExamples extends Vue {}
</script>

<style lang="scss" scoped>
@import 'src/mixifier/ads_mixer.scss';

.default {
	@include draw_in(orange, 'default');
}
.red {
	@include draw_in(blue, 'red');
}
.green {
	@include draw_in(green, 'green');
}

.examples {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-around;
}
</style>