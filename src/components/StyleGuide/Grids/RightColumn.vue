<template lang="pug">
.grid-container
	.cell.a A
	.cell.b B
	.cell.c C
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class RightColumn extends Vue {}
</script>

<style lang="scss" scoped>
@import '../../../sass/colors';
@mixin right_column_grid() {
	.grid-container {
		display: grid;
		grid-template-columns: 70% 30%;
		grid-gap: 2px;
		.cell {
			height: 50px;
			line-height: 50px;
			color: white;
			border: 1px solid lightgrey;
			text-align: center;
			background-color: hsla(153, 50%, 48%, 1);
			&.a {
				grid-column: 1/3;
				background-color: map-get($colors, 'blue');
			}
			&.b {
				background-color: map-get($colors, 'yellow');
			}
			&.c {
				background-color: map-get($colors, 'red');
			}
		}
	}
}

@include right_column_grid();
</style>