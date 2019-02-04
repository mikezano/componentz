<template lang="pug">
div.example
	form.form
		fieldset 
			legend.form__legend Person Search
			label.form__label First name
			input.form__input(
				type="text"
				name="name"
				placeholder="Enter a first name")
			label.form__label Last Name
			input.form__input(
				type="text"
				name="name"
				placeholder="Enter a last name")
			.form__footer
				button.simple-button(@click='showName') OK
				button.simple-button No
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({ name: 'SimpleForm' })
export default class SimpleForm extends Vue {}
</script>

<style lang="scss" scoped>
@import 'src/mixifier/ads_mixer';
$mainD1: gray;
@mixin simple-form() {
	.form {
		//width: 20rem;
		fieldset {
			padding: 1rem;
			text-align: left;
		}
		&__legend {
			font-weight: bold;
		}
		&__input,
		&__dropdown {
			display: block;
			width: 100%;
			padding: 0.3rem;
			margin: 0.2rem auto 0.6rem; //top left&right bottom
			border: 0.1rem solid $mainD1;
			box-sizing: border-box;
		}
		&__label {
			padding: 0;
			margin: 0;
			display: block;
			font-size: 1rem;
		}
		&__checkboxes {
			margin: 0.2rem auto 0.6rem;
			@include checkbox-group(1);
		}
		&__footer {
			display: flex;
			button {
				@include simpleButton();
			}
			button:first-child {
				margin-left: 0;
			}
		}
	}
} //cricle-btn end
.example {
	@include simple-form();
}
</style>