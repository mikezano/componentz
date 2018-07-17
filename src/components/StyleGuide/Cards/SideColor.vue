<template lang="pug">
.container
	.fruits.scard
		.scard__indicator 
			.scard__indicator__text Fruits
		.scard__content 
			dl
				dt 🍊:
				dd Tangerine
				dt 🍓:
				dd Strawberry
				dt 🍎:
				dd Apple
				dt 🍌:
				dd Banana
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
@Component({ name: 'SideColor' })
export default class SideColor extends Vue {}
</script>

<style lang="scss" scoped>
@mixin side-card($color, $titleSize, $width) {
	$gray: hsla(0, 0%, 80%, 1);
	$el: scard;
	&.#{$el} {
		display: flex;
		width: $width;
		border: 1px solid $gray;
		margin: 10px;
		background-color: white;
		.#{$el}__indicator {
			background-color: $color;
			width: $titleSize + ($titleSize/2px);
			overflow: hidden;
			text-overflow: ellipsis;

			&__text {
				color: white;
				font-weight: bold;
				font-size: $titleSize;
				margin-left: $titleSize + ($titleSize/8px);
				margin-top: 10px;
				transform: rotate(90deg);
				transform-origin: 0 0;
			}
		}
		.#{$el}__content {
			width: 100%;
			padding: 8px;
			text-align: left;
		}
	}
} //side-card end
.fruits {
	@include side-card(#007bff, 16px, 160px);
}

.fruits {
	.red {
		color: #cc0000;
	}
	.blue {
		color: #007bff;
	}
	.orange {
		color: #ff8800;
	}
	.green {
		color: #007e33;
	}

	dl {
		display: flex;
		flex-wrap: wrap;
	}
	dt {
		font-weight: bold;
		width: 40%;
	}
	dd {
		color: black;
		width: 60%;
		margin: 0;
	}
}
</style>