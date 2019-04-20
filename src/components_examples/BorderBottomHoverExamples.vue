<template lang="pug">
.examples
	.example1.bottom-border-hover Wow!
	.example2.bottom-border-hover Another Hover
	.example3.bottom-border-hover One more!
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
@Component({ name: 'BorderBottomHoverExamples' })
export default class BorderBottomHoverExamples extends Vue {}
</script>

<style lang="scss" scoped>
@import 'src/mixifier/ads_mixer.scss';
@import '../sass/colors';

.example1 {
	@include bottom-border-hover(map-get($colors, 'z-blue'), 2px);
}
.example2 {
	@include bottom-border-hover(map-get($colors, 'z-green'), 10px);
}
.example3 {
	@include bottom-border-hover(map-get($colors, 'z-red'), 1px);
}
.examples {
	display: flex;
	align-items: center;
	justify-content: space-around;
}
</style>