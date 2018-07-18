<template lang="pug">

.examples
	.default.btn-circle
		| 🤷
	.fruit.btn-circle
		| 🍓
	.vegetable.btn-circle
		| 🥕
	.face.btn-circle
		| 🤢
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class CircleZoomExamples extends Vue {}
</script>

<style lang="scss" scoped>
@import 'src/mixifier/ads_mixer.scss';
.default {
  @include btn-circle();
}
.fruit {
  @include btn-circle(red, 40px);
}
.vegetable {
  @include btn-circle(orange, 20px);
}
.face {
  @include btn-circle(green, 60px);
}

.examples {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>