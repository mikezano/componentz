<template lang="pug">
div.flex
	.clockwise
		.words Hello
	button.draw
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({ name: 'Clockwise' })
export default class Clockwise extends Vue {}
</script>


<style lang="scss" scoped>
@import '../../../sass/colors';
$border-width: 20px;
.clockwise {
	height: 6rem;
	width: 10rem;
	box-sizing: border-box;

	box-shadow: inset 0 0 0 $border-width $bs_red;
	position: relative;
	vertical-align: middle;

	&::before,
	&::after {
		box-sizing: inherit;
		content: '';
		position: absolute;
		border: $border-width solid transparent;
		width: 0;
		height: 0;
	}

	&::before {
		top: 0;
		left: 0;
	}

	&::after {
		bottom: 0;
		right: 0;
	}

	&:hover {
		cursor: pointer;
		color: $bs_blue;
	}

	&:hover::before,
	&:hover::after {
		width: 100%;
		height: 100%;
	}

	&:hover::before {
		border-top-color: $bs_blue;
		border-right-color: $bs_blue;
		transition: width 0.25s ease-out, height 0.25s ease-out 0.25s;
	}
	&:hover::after {
		border-bottom-color: $bs_blue;
		border-left-color: $bs_blue;
		transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s,
			height 0.25s ease-out 0.75s;
	}
}

button {
	background: none;
	border: 0;
	box-sizing: border-box;
	margin: 1em;
	padding: 1em 2em;
	box-shadow: inset 0 0 0 2px red;
	color: red;
	font-size: inherit;
	font-weight: 700;
	position: relative;
	vertical-align: middle;

	&::before,
	&::after {
		box-sizing: inherit;
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
	}
}
.draw {
	transition: color 0.25s;

	&::before,
	&::after {
		// Set border to invisible, so we don't see a 4px border on a 0x0 element before the transition starts
		border: 2px solid transparent;
		width: 0;
		height: 0;
	}

	// This covers the top & right borders (expands right, then down)
	&::before {
		top: 0;
		left: 0;
	}

	// And this the bottom & left borders (expands left, then up)
	&::after {
		bottom: 0;
		right: 0;
	}

	&:hover {
		color: cyan;
	}

	// Hover styles
	&:hover::before,
	&:hover::after {
		width: 100%;
		height: 100%;
	}

	&:hover::before {
		border-top-color: cyan; // Make borders visible
		border-right-color: cyan;
		transition: width 0.25s ease-out, height 0.25s ease-out 0.25s;
	}

	&:hover::after {
		border-bottom-color: cyan; // Make borders visible
		border-left-color: cyan;
		transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s,
			height 0.25s ease-out 0.75s;
	}
}
</style>