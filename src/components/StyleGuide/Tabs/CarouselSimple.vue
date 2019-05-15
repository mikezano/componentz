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

@mixin carousel-simple($sections: 3, $width: 100px) {
	$s: carousel;
	&.#{$s} {
		.#{$s}__links {
			height: 2rem;
		}

		.#{$s}__link {
			text-decoration: none;
			margin: 0 0.4rem;
		}
		.#{$s}__display {
			width: $width;
			height: 100px;
			overflow: hidden;
			background-color: gray;
		}
		.#{$s}__container {
			width: ($width * $sections);
			display: flex;
			height: 100%;
		}
		.#{$s}__component {
			width: $width;
			transition: all 0.2s ease-in-out;
			padding: 0.4rem;
		}
	}

	@for $i from 1 through $sections {
		a[id='link#{$i}']:target ~ .carousel__display .carousel__component {
			transform: translateX(-1 * (($i - 1) * $width));
		}
	}
} //carousel-simple end

.default {
	@include carousel-simple(3, 200px);
}
</style>