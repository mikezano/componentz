<template lang="pug">
.container
	.default.rollover
		.rollover__container
			.rollover__main Main
			.rollover__sub Sub

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
		margin:0 .2rem;
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
.default {
	@include rollover(50px, gray, white);
}
</style>