<template lang="pug">
button.btn.btn-primary.btn-flip Watch this!
</template>



<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
	name: 'Flip',
})
export default class Flip extends Vue {}
</script>

<style lang="scss" scoped>
@mixin flip-btn($width: auto) {
	$selector: btn-flip;
	&.#{$selector} {
		width: $width;
		transition: all 1s ease-in-out;
		&:hover {
			transform: rotateX(360deg);
		}
	}
} //flip end
@include flip-btn();
</style>