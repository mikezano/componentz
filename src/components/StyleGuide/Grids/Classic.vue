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
@Component({ name: 'Classic' })
export default class Classic extends Vue {}
</script>

<style lang="scss" scoped>
@import '../../../sass/colors';

@mixin classic_grid_layout() {
	.grid-container {
		display: grid;
		grid-template-columns: 20% 60% 20%;
		grid-gap: 0;
		.cell {
			color: white;
			text-align: center;
			padding: 10px;

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
				background-color: map-get($colors, 'z-blue');
			}
			&.b {
				background-color: map-get($colors, 'z-yellow');
			}
			&.c {
				background-color: map-get($colors, 'z-red');
			}
			&.d {
				background-color: map-get($colors, 'z-orange');
			}
			&.e {
				background-color: map-get($colors, 'z-green');
			}
		}
	}
} // classic_grid_layout end

@include classic_grid_layout();
</style>