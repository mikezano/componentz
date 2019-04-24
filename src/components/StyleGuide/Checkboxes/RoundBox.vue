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
@Component({ name: 'RoundBox' })
export default class RoundBox extends Vue {}
</script>

<style lang="scss" scoped>
@mixin checkbox($isRound: false) {
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
			top: 0.4rem;
			background: #666;
			width: 0.4rem;
			height: 0.4rem;
			border-radius: 50%;
		}
	}
} // checkbox end
@mixin checkbox-group($scale: 1) {
	.checkbox-group {
		display: flex;
		transform: scale($scale);
		@include checkbox(true);
	}
} // checkbox-group end

@include checkbox-group(1);
</style>