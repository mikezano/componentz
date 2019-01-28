<template lang="pug">
.container
	.ex1.rollover
		.rollover__container
			.rollover__main GOOD
			.rollover__sub 
				| 💚
	.ex2.rollover
		.rollover__container
			.rollover__main Bad
			.rollover__sub 
				| 😈
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({ name: "Rollover" })
export default class Rollover extends Vue {}
</script>

<style lang="scss" scoped>
@import "../../../sass/colors";

@mixin rollover($size, $backgroundColor, $textColor) {
	$s: rollover;
	&.#{$s} {
		width: 2 * $size;
		height: $size;
		overflow: hidden;
		color: $textColor;
		text-align: center;
		.#{$s}__container {
			background-color: $backgroundColor;
			transition: all 0.5s ease-in-out;
		}
		&:hover {
			.rollover__container {
				margin-top: -1 * $size;
				cursor: pointer;
			}
		}
		.#{$s}__main {
			height: $size;
			line-height: $size;
			font-size: $size/2;
		}
		.#{$s}__sub {
			height: $size;
			line-height: $size;
			font-size: $size/3;
		}
	}
} //rollover end

.container {
	flex-direction: row;
}
.ex1 {
	@include rollover(50px, $bs_blue, white);
}

.ex2 {
	@include rollover(50px, $bs_red, white);
}
</style>