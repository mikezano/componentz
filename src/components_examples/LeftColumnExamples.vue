<template lang="pug">
div
	.small
		.grid-container
			.cell.a Header
			.cell.b Side Bar
			.cell.c 
				p
					| Sed luctus magna sem, a pharetra lacus tempus vitae.
					| Sed mollis fermentum libero eu ornare. Quisque ut sollicitudin
					| magna. Maecenas a felis et metus molestie gravida a nec nunc. Maecenas

	.medium
		.grid-container
			.cell.a Header
			.cell.b Side Bar
			.cell.c 
				p
					| Sed luctus magna sem, a pharetra lacus tempus vitae.
					| Sed mollis fermentum libero eu ornare. Quisque ut sollicitudin
					| magna. Maecenas a felis et metus molestie gravida a nec nunc. Maecenas

	.large
		.grid-container
			.cell.a Header
			.cell.b Side Bar
			.cell.c 
				p
					| Sed luctus magna sem, a pharetra lacus tempus vitae.
					| Sed mollis fermentum libero eu ornare. Quisque ut sollicitudin
					| magna. Maecenas a felis et metus molestie gravida a nec nunc. Maecenas
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({ name: 'LeftColumnExamples' })
export default class LeftColumnExamples extends Vue {}
</script>

<style lang="scss" scoped>
@import 'src/mixifier/ads_mixer.scss';

.small {
	@include leftColumnGrid();
}
.medium {
	@include leftColumnGrid();
}
.large {
	@include leftColumnGrid();
}
</style>