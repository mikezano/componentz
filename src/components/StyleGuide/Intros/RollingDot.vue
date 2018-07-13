<template lang="pug">
.intro
	.intro__travel-dot
	.intro__words
		.intro__a A
		.intro__d D
		.intro__amp &
		.intro__s S
		.intro__presents Presents
	.intro__dots
		.intro__dot1
		.intro__dot2
		.intro__dot3
</template>


<script>
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class RollingDot extends Vue {}
</script>

<style lang="scss" scoped>
@mixin intro(
	$scale: 1,
	$dot_color: orange,
	$ads_color: hsla(0, 0%, 27%, 1),
	$presents_color: hsla(0, 0%, 50%, 1)
) {
	$travel_distance: 235px;

	.intro {
		display: flex;
		align-items: flex-start;
		font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
		font-size: 2em * $scale;
		position: relative;

		&__travel-dot,
		&__dot1,
		&__dot2,
		&__dot3 {
			width: 10px * $scale;
			height: 10px * $scale;
			border-radius: 5px * $scale;
		}
		&__travel-dot {
			background-color: $dot_color;
			position: absolute;
			margin-top: 1em;
			animation: move-dot 1.5s ease-in-out forwards;
		}
		&__words {
			display: flex;
			align-items: flex-start;
			width: $travel_distance * $scale;
		}
		&__a,
		&__d,
		&__amp,
		&__s {
			font-weight: bold;
			opacity: 0;
			text-shadow: (2px * $scale) (4px * $scale) hsla(0, 0%, 83%, 0.7);
			color: $ads_color;
			animation: slide-down 0.2s ease-in-out forwards;
		}
		&__a {
			animation-delay: 0.1s;
		}
		&__d {
			animation-delay: 0.2s;
		}
		&__amp {
			animation-delay: 0.3s;
		}
		&__s {
			animation-delay: 0.4s;
		}

		&__presents {
			opacity: 0;
			animation: fade-in-presents 1s ease-in-out 0.5s forwards;
			margin: 0 10px;
			color: $presents_color;
		}

		&__dots {
			display: flex;
			justify-content: space-between;
			width: 40px * $scale;
		}

		&__dot1,
		&__dot2,
		&__dot3 {
			background-color: $dot_color;
			margin-top: 0.8em;
			opacity: 0;
			animation: jump 1s ease-in-out infinite;
		}

		&__dot1 {
			animation-delay: 1.44s;
		}
		&__dot2 {
			animation-delay: 1.54s;
		}
		&__dot3 {
			animation-delay: 1.64s;
		}
	}

	@keyframes slide-down {
		0% {
			opacity: 0;
			transform: translateY(-20px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes jump {
		0% {
			transform: translateY(0);
			opacity: 1;
		}
		50% {
			transform: translateY(-10px);
			opacity: 1;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@keyframes fade-in-presents {
		0% {
			opacity: 0;
			transform: translateY(-10px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes move-dot {
		0% {
			transform: translateX(0);
		}
		80% {
			transform: translateX($travel_distance * $scale);
			margin-top: 1em;
		}
		95% {
			transform: translateX($travel_distance * $scale);
			margin-top: 0.8em;
			opacity: 1;
		}
		100% {
			transform: translateX($travel_distance * $scale);
			margin-top: 0.8em;
			opacity: 0;
		}
	}
} //intro end

@include intro();
</style>