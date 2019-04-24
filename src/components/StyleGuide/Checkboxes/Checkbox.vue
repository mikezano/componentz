<template lang="pug">
.default.checkbox
	input#default.checkbox__button(type='radio' name='default', value='Default')
	label.checkbox__label(for='default') Default
</template>


<script>
import { Component, Vue } from 'vue-property-decorator';
@Component({ name: 'Checkbox' })
export default class Checkbox extends Vue {}
</script>

<style lang="scss" scoped>
@mixin checkbox($isRound: false, $usesCheck: false) {
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
			@if $isRound == true {
				border-radius: 50%;
			}
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
			background: #666;

			@if $usesCheck == true {
				top: 0.5rem;
				width: 0.1rem;
				height: 0.1rem;
				box-shadow: 0.1rem 0 0 black, 0.2rem 0 0 black,
					0.2rem -0.1rem 0 black, 0.2rem -0.2rem 0 black,
					0.2rem -0.3rem 0 black, 0.2rem -0.4rem 0 black;
				transform: rotate(45deg);
			} @else {
				top: 0.4rem;
				width: 0.4rem;
				height: 0.4rem;
			}
		}
	}
} // checkbox end

.default {
	@include checkbox(false, true);
}
</style>