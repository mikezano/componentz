<template lang="pug">
.container
	.checkbox-group
		.checkbox
			input#one.checkbox__button(type='radio' name='test', value='one')
			label.checkbox__label(for='one') One
		.checkbox
			input#two.checkbox__button(type='radio' name='test', value='two')
			label.checkbox__label(for='two') Two
		.checkbox
			input#three.checkbox__button(type='radio' name='test', value='three')
			label.checkbox__label(for='three') Three
</template>


<script>
import { Component, Vue } from 'vue-property-decorator';
@Component({ name: 'SquareBox' })
export default class SquareBox extends Vue {}
</script>

<style lang="scss" scoped>
@mixin checkbox() {
	.checkbox {
		position: relative;
		line-height: 1.2rem;
		&__button {
			opacity: 0;
			cursor: pointer;
			margin: 0;
		}
		&__label {
			cursor: pointer;
			padding: 0 0.7rem 0 0.6rem;
		}
		&__label:before {
			content: '';
			position: absolute;
			width: 1rem;
			height: 1rem;
			background-color: white;
			left: 0;
			border: 0.1rem solid lightgray;
		}
		&__button:hover + .checkbox__label:before {
			background-color: whitesmoke;
		}
		&__button:checked + .checkbox__label:after {
			content: '';
			position: absolute;
			left: 0.4rem;
			top: 0.5rem;
			background: black;
			width: 0.1rem;
			height: 0.1rem;
			box-shadow: 0.1rem 0 0 black, 0.2rem 0 0 black,
				0.2rem -0.1rem 0 black, 0.2rem -0.2rem 0 black,
				0.2rem -0.3rem 0 black, 0.2rem -0.4rem 0 black;
			transform: rotate(45deg);
		}
	}
} // checkbox end
@mixin checkbox-group($scale: 1) {
	.checkbox-group {
		display: flex;
		transform: scale($scale);
		@include checkbox();
	}
} // checkbox-group end

@include checkbox-group(1);
</style>