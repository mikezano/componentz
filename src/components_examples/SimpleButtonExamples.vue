<template lang="pug">
.examples
	button.ex1.simple-button
		| OK
	button.ex2.simple-button
		| Subscribe!
	button.ex3.simple-button
		| 🍎 Apple
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
@Component({ name: 'SimpleButtonExamples' })
export default class SimpleButtonExamples extends Vue {}
</script>

<style lang="scss" scoped>
@import 'src/mixifier/ads_mixer.scss';
@import '../sass/colors';

.ex1 {
	@include simpleButton(red, 1rem);
}
.ex2 {
	@include simpleButton(orange, 0.5rem);
}
.ex3 {
	@include simpleButton(green, 1.5rem);
}

</style>