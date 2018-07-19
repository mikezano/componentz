<template lang="pug">
.sample.indicator-card
	.indicator-card__header Header
		button.circle
			icon(name="truck" scale="1")
		button.circle
			icon(name="truck" scale="1")
	.indicator-card__content All your content goes here
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
@Component({ name: 'Indicator' })
export default class Indicator extends Vue {}
</script>

<style lang="scss" scoped>
@mixin indicator-card() {
	$selector: indicator-card;
	&.#{$selector} {
		$color: darkgray;
		border: 1px solid darken($color, 20%);
		transition: all 0.2s ease-out;

		&:hover {
			box-shadow: 2px 2px 4px black;
		}
		.#{$selector}__header {
			background-color: darkgray;
			padding: 10px;
		}
		.#{$selector}__content {
			background-color: white;
			color: black;
			padding: 10px;
		}

		.circle {
			//@include circle-button(lightblue, 24px);
			float: right;
			margin-top: 16px;
		}
	}
} //indicator-card end

.sample {
	@include indicator-card();
}
</style>