<template lang="pug">

button.plus.spin-btn
	| Default
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({ name: 'Spin' })
export default class Spin extends Vue {}
</script>

<style lang="scss" scoped>
@import '../../../sass/colors';
@mixin spin-btn($color, $scale, $hasBackground: true) {
	$selector: spin-btn;
	&.#{$selector} {

		@if $hasBackground == true{
			border: 1px solid darken($color, 10%);
			background: $color;
		}
		@else{
			border: none;
			background: none;
		}
		color: white;
		transition: transform 0.5s ease-out, color 0.7s ease-out;
		display: flex;
		align-items: center;
		justify-content: center;

		&:hover {
			color: lighten($color, 10%);
			transform: rotate(360deg) scale($scale);
			cursor: pointer;
		}
	}
} //spin-btn end
.plus {
	@include spin-btn(gray, 3.5);
}
</style>