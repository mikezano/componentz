<template lang="pug">
.default.animated-checkbox
	input#animated.animated-checkbox__input(type='radio' name='animated', value='Animated')
	label.animated-checkbox__label(for='animated') Animated
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
@Component({ name: 'AnimatedCheckbox' })
export default class AnimatedCheckbox extends Vue {}
</script>

<style lang="scss" scoped>
@mixin animated-checkbox($isRound: false, $usesCheck: false) {

	$el: animated-checkbox;
	&.#{$el} {
		position:relative;
		line-height:1.2rem;
		display: flex;
		align-items:center;

		.#{$el}__input, .#{$el}__label{
			cursor: pointer;
		}

		.#{$el}__input {
			margin: 0;
		}
		.#{$el}__label {
			padding: 0 0.6rem;
		}

		.#{$el}__label:before {
			content: '';
			position: absolute;
			width: 1rem;
			height: 1rem;
			background-color: white;
			left: 0;
			border: 0.1rem solid lightgray;
		}

		 .#{$el}__label::after{
			content: '';
			position: absolute;
			left: 0.4rem;
			top: 0.5rem;
			width: 0.1rem;
			height: 0.1rem;

			transform: rotate(45deg) scale(0);
			transition: all 0.2s ease-in-out;
		}

		.#{$el}__input:hover + .#{$el}__label:before {
			background-color: whitesmoke;
		}

		.#{$el}__input:checked + .#{$el}__label:before {
			animation: boom .3s ease-in-out;
		}

@keyframes boom {
	0%{transform: scale(1);}
	50%{transform: scale(1.2); background-color: lightblue;}
	100%{transform: scale(1);}

}
		.#{$el}__input:checked + .#{$el}__label::after {
			content: '';
			position: absolute;
			left: 0.2rem;
			background: #666;
			top: 0.5rem;
			width: 0.1rem;
			height: 0.1rem;
			box-shadow: 0.1rem 0 0 black, 0.2rem 0 0 black,
				0.2rem -0.1rem 0 black, 0.2rem -0.2rem 0 black,
				0.2rem -0.3rem 0 black, 0.2rem -0.4rem 0 black;
			transform:  rotate(45deg) scale(1.5);
		}
	}
} // checkbox end

.default {
	@include animated-checkbox(false, true);
}
</style>