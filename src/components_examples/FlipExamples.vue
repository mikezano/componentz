<template lang="pug">

.examples
	button.three-sixty.btn.btn-secondary.btn-flip 360!
	button.flip.btn.btn-danger.btn-flip FLIP!
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({ name: 'FlipExamples' })
export default class FlipExamples extends Vue {}
</script>

<style lang="scss" scoped>
@import 'src/mixifier/ads_mixer.scss';

.three-sixty {
	@include flip-btn(80px, yellow);
}
.flip {
	@include flip-btn(100px, orange, 2rem);
}

.examples {
	display: flex;
	align-items:center;
}
button{
	margin:0 10px;
}
</style>