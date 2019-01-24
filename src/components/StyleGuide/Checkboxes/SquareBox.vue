<template lang="pug">
.container
	.checkbox
		input#one.checkbox__button(type='radio' name='test', value='one')
		label.checkbox__label(for='one') One
		input#two.checkbox__button(type='radio' name='test', value='two')
		label.checkbox__label(for='two') Two
		input#three.checkbox__button(type='radio' name='test', value='three')
		label.checkbox__label(for='three') Three
</template>


<script>
import { Component, Vue } from "vue-property-decorator";
@Component({ name: "SquareBox" })
export default class SquareBox extends Vue {}
</script>

<style lang="scss" scoped>
@mixin checkboxes($scale: 1) {
	.checkbox {
		transform: scale($scale);
		&__label {
			position: relative;
			cursor: pointer;
			//padding: 0;
		}
		&__label:before {
			content: "";
			display: inline-block;
			width: 1rem;
			height: 1rem;
			background-color: white;
			margin: 0 .2rem 0 1rem;
		}
		&__button {
			opacity: 0;
			position: absolute;
		}
		&__button:hover + .checkbox__label:before {
			background-color: whitesmoke;
		}
		&__button:focus + .checkbox__label:before {
			box-shadow: 0 0 0 0.1rem rgba(0, 0, 0, 0.12);
		}
		&__button:checked + .checkbox__label:after {
			content: "";
			position: absolute;
			left: 0.25rem;
			top: 0.6rem;
			background: black;
			width: 0.1rem;
			height: 0.1rem;
			box-shadow: 0.1rem 0 0 black, 0.2rem 0 0 black,
				0.2rem -0.1rem 0 black, 0.2rem -0.2rem 0 black,
				0.2rem -0.3rem 0 black, 0.2rem -0.4rem 0 black;
			transform: rotate(45deg);
		}
	}
} //checkboxes end
.container {
	@include checkboxes();
}
</style>