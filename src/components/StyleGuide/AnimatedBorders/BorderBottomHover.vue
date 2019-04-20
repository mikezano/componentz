<template lang="pug">
.my-example.bottom-border-hover Hover Me
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({ name: 'BorderBottomHover' })
export default class BorderBottomHover extends Vue {}
</script>


<style lang="scss" scoped>
@import '../../../sass/colors';

@mixin bottom-border-hover($color: orange, $underline-size: 4px) {
	$s: bottom-border-hover;
	&.#{$s} {
		position: relative;
		border-bottom: $underline-size solid white;
		margin: 0 1rem;

		&::before {
			content: '';
			position: absolute;
			transition: width 0.25s ease-in-out;
			width: 0;
			height: 100%;
		}
		&:hover::before {
			cursor: pointer;
			border-bottom: $underline-size solid $color;
			width: 100%;
		}
	}
} // bottom-border-hover end
.my-example {
	@include bottom-border-hover();
}
</style>