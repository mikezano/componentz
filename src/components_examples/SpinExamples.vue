<template lang="pug">
.examples
	.soccer-ball.spin-btn ⚽
	button.plus.spin-btn ➕
	.sun.spin-btn 🌞
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
@Component({ name: 'SpinExamples' })
export default class SpinExamples extends Vue {}
</script>

<style lang="scss" scoped>
@import 'src/mixifier/ads_mixer.scss';
@import '../sass/colors';

.soccer-ball {
	font-size: 40px;
	@include spin-btn($bs_green, 1.5, false);
}
.plus {
	font-size: 20px;
	@include spin-btn($bs_green, 2, false);
}
.sun {
	@include spin-btn($bs_green, 2.5, false);
}

.examples {
	display: flex;
	align-items: center;
	justify-content: space-around;
}
</style>