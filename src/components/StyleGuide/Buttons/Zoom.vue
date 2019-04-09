<template lang="pug">
button.default.zoom-btn Default
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({ name: 'Zoom' })
export default class Zoom extends Vue {}
</script>

<style lang="scss" scoped>
@mixin zoom-btn($scale, $textColor: white, $backgroundColor: blue) {
	$selector: zoom-btn;
	&.#{$selector} {
		margin: 0.2rem;
		$shadow-color: black;
		box-shadow: 2px 2px 4px $shadow-color;
		transition: all 0.2s ease-in-out;
		color: $textColor;
		border: 1px solid darken($backgroundColor, 10%);
		background-color: $backgroundColor;
		&:hover {
			transform: scale($scale);
			box-shadow: 4px 4px 8px lighten($shadow-color, 20%);
		}
	}
} //zoom-btn end
.default {
	@include zoom-btn(1.1, white, gray);
}
</style>