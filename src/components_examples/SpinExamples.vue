<template lang="pug">
.examples
	.soccer-ball.spin-btn ⚽
	button.plus.spin-btn ➕
	.sun.spin-btn 🌞
	textarea.hello.spin-btn Hi There
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
	@include spin-btn($bs_green, 1.5);
}
.plus {
	@include spin-btn($bs_green, 6);
}
.sun {
	@include spin-btn($bs_green, 4);
}
.hello {
	@include spin-btn($bs_green, 1.5);
}

.examples {
	display: flex;
	align-items: center;
	justify-content: space-around;
}
</style>