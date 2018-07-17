<template lang="pug">
.default.btn-circle
	| 🤷
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({ name: 'CircleZoom' })
export default class CircleZoom extends Vue {}
</script>

<style lang="scss" scoped>
@mixin btn-circle($color: #ccc, $size: 20px) {
	$selector: btn-circle;
	&.#{$selector} {
		border: 1px solid darken($color, 20%);
		background-color: $color;
		color: black;
		width: $size * 2;
		height: $size * 2;
		text-align: center;
		margin: 4px;
		font-size: $size;
		line-height: $size * 2;
		border-radius: $size;
		//box-shadow:2px 2px 4px hsla(0,0%,0%,1);
		transition: transform 0.1s ease-out, box-shadow 0.1s ease-out;
		&:hover {
			transform: scale(1.05);
			box-shadow: 1px 1px 2px hsla(0, 0%, 0%, 0.5);
			background-color: lighten($color, 3%);
			cursor: pointer;
		}
		&:active {
			transform: scale(1.02);
		}
		&:focus {
			outline: none;
		}
	}
} //cricle-btn end
.default {
	@include btn-circle();
}
</style>