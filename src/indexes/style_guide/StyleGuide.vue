<template lang="pug">
	.container
		router-view
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class StyleGuide extends Vue {}
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

}
</style>