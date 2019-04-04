<template lang="pug">
.container
	.blue.card
		.card__header 
			.card__header__indicator
			.card__header__text Shabby
		.card__content 
			| 90's fingerstache franzen cloud bread. Shoreditch meditation
			| prism pok pok ennui, art party microdosing authentic truffaut
			| fam jean shorts paleo shabby chic cardigan.
</template>


<script>
import { Component, Vue } from 'vue-property-decorator';
@Component({ name: 'CornerColor' })
export default class CornerColor extends Vue {}
</script>

<style lang="scss" scoped>
@mixin corner-card($color, $width) {
	$gray: hsla(0, 0%, 80%, 1);
	$el: card;
	&.#{$el} {
		border: 1px solid $gray;
		background-color: white;
		width: $width;
		margin: 8px;
		padding: 2px;
		transition: box-shadow 0.2s ease-out;
		&:hover {
			box-shadow: 2px 2px 4px $gray;
		}
		.#{$el}__header {
			&__indicator {
				position: absolute;
				border-style: solid;
				border-width: 30px 30px 0 0;
				border-color: $color transparent transparent transparent;
			}
			&__text {
				text-align: center;
				font-weight: bold;
				line-height: 30px;
			}
		}
		.#{$el}__content {
			text-align: left;
			padding: 4px;
			font-size: 14px;
		}
	}
} //corner-card end
.blue {
	@include corner-card(#007bff, 200px);
}
</style>