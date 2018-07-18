<template lang="pug">
.examples
	.good
		.rollover
			.rollover__container
				.rollover__main GOOD
				.rollover__sub 
					| 💚

	.bad
		.rollover
			.rollover__container
				.rollover__main BAD
				.rollover__sub 
					| 😈
	.shrug
		.rollover
			.rollover__container
				.rollover__main Shrug
				.rollover__sub 
					| ¯\_(ツ)_/¯

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class RolloverExamples extends Vue {}
</script>

<style lang="scss" scoped>
@import 'src/mixifier/ads_mixer.scss';
@import '../sass/colors';

.good {
	@include rollover(50px, $bs_blue, white);
}
.bad {
	@include rollover(100px, $bs_red, white);
}
.shrug {
	@include rollover(100px, $bs_green, white);
}
.examples {
	display: flex;
	align-items: center;
	justify-content: space-around;
}
</style>