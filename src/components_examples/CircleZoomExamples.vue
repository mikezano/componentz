<template lang="pug">

.examples
	.fruit.btn-circle
		| 🍓
	.vegetable.btn-circle
		| 🥕
	.face.btn-circle
		| 🤢
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({ name: 'CircleZoomExamples' })
export default class CircleZoomExamples extends Vue {}
</script>

<style lang="scss" scoped>
@import 'src/mixifier/ads_mixer.scss';
.fruit {
	@include btn-circle(red, 10px);
}
.vegetable {
	@include btn-circle(orange, 20px);
}
.face {
	@include btn-circle(green, 30px);
}

.examples {
	display: flex;
	align-items: center;
	justify-content: space-around;
}
</style>