<template lang="pug">
.default.business-card
	.business-card__profile
	.business-card__title Default Title
	.business-card__role Default Role
</template>


<script>
import { Component, Vue } from 'vue-property-decorator';
@Component({ name: 'BusinessCard' })
export default class BusinessCard extends Vue {}
</script>

<style lang="scss" scoped>
@mixin businessCard($width: 10rem, $height: 14rem) {

	$s: business-card;
	&.#{$s} {
		border:.1rem solid gray;
		width:$width;
		height:$height;

		display:flex;
		flex-direction: column;
		.#{$s}__profile {

		}
		.#{$s}__title {
			font-weight:bold;
		}
		.#{$s}__role {
			font-style:italic;
		}
	}
} //corner-card end
.default {
	@include businessCard;
}
</style>