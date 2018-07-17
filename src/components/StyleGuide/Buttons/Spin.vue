<template lang="pug">

button.plus.spin-btn
	| ⚽
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({ name: 'Spin' })
export default class Spin extends Vue {}
</script>

<style lang="scss" scoped>
@import '../../../sass/colors';
@mixin spin-btn($color, $scale) {
	$selector: spin-btn;
	&.#{$selector} {
		border: none;
		background: none;
		color: $color;
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
	@include spin-btn($bs_green, 1.5);
}
</style>