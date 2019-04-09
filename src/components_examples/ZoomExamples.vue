<template lang="pug">
.examples
	button.small-zoom.zoom-btn Small Zoom
	button.large-zoom.zoom-btn Large Zoom
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
@Component({ name: 'ZoomExamples' })
export default class ZoomExamples extends Vue {}
</script>

<style lang="scss" scoped>
@import 'src/mixifier/ads_mixer.scss';
@import '../sass/colors';

.small-zoom {
	@include zoom-btn(1.1, white, orange);
}

.large-zoom {
	@include zoom-btn(1.3, white);
}

.examples {
	display: flex;
	align-items: center;
}
</style>