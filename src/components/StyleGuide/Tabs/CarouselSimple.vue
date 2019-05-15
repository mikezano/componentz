<template lang="pug">
.default.carousel
	a(id="link1")
	a(id="link2")
	a(id="link3")
	.carousel__links
		a.carousel__link(href="#link1") Link 1
		a.carousel__link(href="#link2") Link 2
		a.carousel__link(href="#link3") Link 3
	.carousel__display
		.carousel__container
			.carousel__component
				h1 First Page
			.carousel__component
				h1 Second Page
			.carousel__component
				h1 Third Page
</template>


<script>
import { Component, Vue } from 'vue-property-decorator';
@Component({ name: 'CarouselSimple' })
export default class CarouselSimple extends Vue {}
</script>

<style lang="scss" scoped>
@import '../../../sass/colors';

.container {
	//display: flex;
	flex-direction: row;
}

@mixin carousel($tabCount: 2) {
	$s: carousel;
	&.#{$s} {
		border: 1px solid black;
		.#{$s}__links {
			height: 2rem;
		}
		.#{$s}__display {
			width: 100px;
			height: 100px;
			overflow: hidden;
			background-color: gray;
		}
		.#{$s}__container {
			width: 300px;
			display: flex;
			height: 100%;
		}
		.#{$s}__component {
			background: linear-gradient(blue, orange);
			width: 100px;
		}
	}

	a[id='link1']:target ~ .carousel__display .carousel__component {
		transform: translateX(-20px);
	}
} //underlined_tabs end
.default {
	@include carousel();
}
</style>