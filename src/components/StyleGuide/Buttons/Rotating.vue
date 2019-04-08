<template lang="pug">

.default.rotating-btn
	.rotating-btn__container
		.rotating-btn__main
			span Default
			| 😊
		.rotating-btn__alt
			span  Alt
			| 😮
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({ name: "Rotating" })
export default class Rotating extends Vue {}
</script>

<style lang="scss" scoped>
@import "../../../sass/colors";
@mixin rotating-btn($width, $height, $color, $fontColor, $fontSize) {
	$s: rotating-btn;
	&.#{$s} {
		width: $width;
		height: $height;
		cursor: pointer;
		perspective: 500px;
		color: $fontColor;
		margin:0 10px;

		.#{$s}__container {
			height: 100%;
			transform-style: preserve-3d;
			transition: 0.25s;
			position: relative;
			border: 1px solid blue;
			font-size: $fontSize;
		}

		.#{$s}__container:hover {
			transform: rotateX(-90deg);
		}

		.#{$s}__main,
		.#{$s}__alt {
			width: 100%;
			position: absolute;
			box-sizing: border-box;
			border: ($height * 0.05) solid $color;
			line-height: ($height * 0.95);
			text-align: center;
			background-color: lighten($color, 20%);
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.#{$s}__main {
			transform: translate3d(0, 0, $height/2);
		}
		.#{$s}__alt {
			transform: rotateX(90deg) translate3d(0, 0, $height/2);
		}
	}
} //rotate_down end

$primary: map-get($colors, primary);
$danger: map-get($colors, danger);
.default {
	@include rotating-btn(100px, 60px, gray, white, 1rem);
}

</style>