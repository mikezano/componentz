<template lang="pug">
.default.business-card
	.business-card__profile
		img(src="http://tinyurl.com/y4742x5r" width="100%")
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
		border:.1rem solid #aaa;
		border-radius:.4rem;
		width:$width;
		height:$height;
		text-align:center;

		display:flex;
		flex-direction: column;
		.#{$s}__profile {
			height: 100%;
			background-color:white;
			border-radius:.4rem .4rem 0 0;
			overflow:hidden;
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