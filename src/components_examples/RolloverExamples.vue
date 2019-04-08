<template lang="pug">
.examples

	.bad.rollover
		.rollover__container
			.rollover__main BAD
			.rollover__sub 
				| 😈
	.shrug.rollover
		.rollover__container
			.rollover__main Shrug
			.rollover__sub 
				| ¯\_(ツ)_/¯



</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({ name: 'RolloverExamples' })
export default class RolloverExamples extends Vue {}
</script>

<style lang="scss" scoped>
@import 'src/mixifier/ads_mixer.scss';
@import '../sass/colors';

.good {
	@include rollover(50px, $bs_blue, white);
}
.bad {
	@include rollover(50px, $bs_red, white);
}
.shrug {
	@include rollover(60px, $bs_green, white);
}
.examples {
	display: flex;
	align-items: center;
	justify-content: space-around;
}
</style>