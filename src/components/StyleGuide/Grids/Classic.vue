<template lang="pug">
.grid-container
	.cell.a Header
	.cell.b Left
	.cell.c 
		p
			| Veggies es bonus vobis, proinde vos
			| postulo essum magis kohlrabi welsh onion 
			| daikon amaranth tatsoi tomatillo melon azuki bean garlic.
	.cell.d Right
	.cell.e Footer
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class Classic extends Vue {}
</script>

<style lang="scss" scoped>
@import '../../../sass/colors.scss';

@mixin classic_grid_layout() {
	.grid-container {
		display: grid;
		grid-template-columns: 20% 60% 20%;
		grid-gap: 2px;
		.cell {
			color: white;
			border: 1px solid lightgrey;
			text-align: center;
			//background-color: hsla(153, 50%, 48%, 1);
			&.a,
			&.e {
				grid-column: 1/4;
			}
			&.b,
			&.c,
			&.d {
				height: 100%;
			}

			&.a {
				background-color: map-get($colors, 'blue');
			}
			&.b {
				background-color: map-get($colors, 'yellow');
			}
			&.c {
				background-color: map-get($colors, 'indigo');
			}
			&.d {
				background-color: map-get($colors, 'orange');
			}
			&.e {
				background-color: map-get($colors, 'teal');
			}
		}
	}
} //classic_grid_layout end

@include classic_grid_layout();
</style>