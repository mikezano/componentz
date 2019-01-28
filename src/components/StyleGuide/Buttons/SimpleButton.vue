<template lang="pug">
div
	button.ex1.simple-button
		| 🤷
	button.ex2.simple-button
		| OK
	button.ex3.simple-button
		| Subscribe!
	button.ex4.simple-button
		| 🍎 Apple
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({ name: "SimpleButton" })
export default class SimpleButton extends Vue {}
</script>

<style lang="scss" scoped>
@mixin simpleButton($color: #ddd, $size: 1rem) {
	$selector: simple-button;
	&.#{$selector} {
		border: 0.1rem solid darken($color, 10%);
		background-color: $color;
		color: black;
		text-align: center;
		margin: 1rem;
		padding: 0 1.5rem;
		font-size: $size;
		line-height: $size * 2;
		transition: transform 0.1s ease-out, box-shadow 0.1s ease-out;
		&:hover {
			transform: scale(1.01);
			box-shadow: 0.1rem 0.1rem 0.4rem hsla(0, 0%, 0%, 0.2);
			background-color: lighten($color, 3%);
			cursor: pointer;
		}
		&:active {
			transform: scale(0.9);
		}
		&:focus {
			outline: none;
		}
	}
} //cricle-btn end
.ex1 {
	@include simpleButton(lightblue, 2rem);
}
.ex2 {
	@include simpleButton(red, 1rem);
}
.ex3 {
	@include simpleButton(orange, 0.5rem);
}
.ex4 {
	@include simpleButton(green, 1.5rem);
}
</style>