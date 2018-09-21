<template>
	<transition name="fade" v-bind="$attrs" v-on="hooks()">
		<slot></slot>
	</transition>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
	name: 'FadeTransition',
})
export default class FadeTransition extends Vue {
	@Prop() public duration!: string;

	public hooks() {
		return {
			beforeEnter: this.setDuration,
			afterEnter: this.cleanUpDuration,
			beforeLeave: this.setDuration,
			afterLeave: this.cleanUpDuration,
			...this.$listeners,
		};
	}

	public setDuration(el: HTMLElement) {
		alert(`setting duration of ${this.duration}`);
		el.style.transitionDuration = `${this.duration}`;
	}

	public cleanUpDuration(el: HTMLElement) {
		alert('cleaning up duration');
		el.style.transitionDuration = '';
	}
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
	transition-property: opacity;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>