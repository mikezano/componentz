<template>
	<transition name="fade" v-bind="$attrs" v-on="$listeners">
		<slot></slot>
	</transition>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
@Component({ name: 'FadeTransition' })
export default class FadeTransition extends Vue {}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>