<template lang="pug">
.examples
	.save.rotating-btn
		.rotating-btn__container
			.rotating-btn__main
				span Save
			.rotating-btn__alt
				span  💾

	.dead-alive.rotating-btn
		.rotating-btn__container
			.rotating-btn__main
				span Dead...
				|💀
			.rotating-btn__alt
				span Or Alive!
				|🤠
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({ name: "RotatingExamples" })
export default class RotatingExamples extends Vue {}
</script>

<style lang="scss" scoped>
@import "src/mixifier/ads_mixer.scss";
@import "../sass/colors";

$indigo: map-get($colors, "indigo");
$teal: map-get($colors, "teal");
$gray: map-get($colors, "gray");

.save {
	@include rotating-btn(90px, 40px, $teal, white, 1rem);
}
.dead-alive {
	@include rotating-btn(120px, 60px, blue, white, 1rem);
}

.examples {
	display: flex;
	align-content: center;
}
</style>