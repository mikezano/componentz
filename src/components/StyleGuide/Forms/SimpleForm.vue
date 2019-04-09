<template lang="pug">
div
	form#example.simple-form
		fieldset.simple-form__fieldset
			legend.simple-form__legend Person Search
			label.simple-form__label First name
			input.simple-form__input(
				type="text"
				name="name"
				placeholder="Enter a first name")
			label.simple-form__label Last Name
			input.simple-form__input(
				type="text"
				name="name"
				placeholder="Enter a last name")
			.simple-form__footer
				button.simple-button OK
				button.simple-button No
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({ name: 'SimpleForm' })
export default class SimpleForm extends Vue {}
</script>

<style lang="scss" scoped>
@import '../../../mixifier/ads_mixer';
$mainD1: gray;
@mixin simple-form($bg-color: #eee) {
	$s: simple-form;
	&.#{$s} {
		.#{$s}__fieldset {
			padding: 1rem;
			text-align: left;
			background-color: $bg-color;
		}
		.#{$s}__legend {
			font-weight: bold;
		}
		.#{$s}__input,
		.#{$s}__dropdown {
			display: block;
			width: 100%;
			padding: 0.3rem;
			margin: 0.2rem auto 0.6rem; //top left&right bottom
			border: 0.1rem solid $mainD1;
			box-sizing: border-box;
		}
		.#{$s}__label {
			padding: 0;
			margin: 0;
			display: block;
			font-size: 1rem;
		}
		.#{$s}__checkboxes {
			margin: 0.2rem auto 0.6rem;
			@include checkbox-group(1);
		}
		.#{$s}__footer {
			display: flex;
			align-items: center;
			button {
				@include simpleButton();
			}
			button:first-child {
				margin-left: 0;
			}
		}
	}
} //simple-form end
#example {
	@include simple-form();
}
</style>