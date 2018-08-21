<template lang="pug">
.clockwise
	.words Hello
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({ name: 'Clockwise' })
export default class Clockwise extends Vue {}
</script>


<style lang="scss" scoped>
@import '../../../sass/colors';
.clockwise {
	height: 6rem;
	width: 10rem;

	box-shadow: inset 0 0 0 0.1rem $bs_red;
	position: relative;
	box-sizing: border-box;

	&::before,
	&::after {
		content: '';
		box-sizing: inherit;
		position: absolute;
		border: 0.1rem solid transparent;
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
	}

	&:hover {
		&::before {
			width: 100%;
			height: 100%;
			border-top: 0.2rem solid $bs_blue;
			border-right: 0.2rem solid $bs_blue;
			transition: width 0.25s ease-in, height 0.25s ease-out 0.25s;
		}

		&::after {
			width: 100%;
			height: 100%;
			border-bottom: 0.2rem solid $bs_blue;
			border-left: 0.2rem solid $bs_blue;
			transition: width 0.25s ease-in 0.5s, height 0.25s ease-out 0.75s;
		}
	}
}
</style>