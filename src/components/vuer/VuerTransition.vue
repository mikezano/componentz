<template lang="pug">
	.vuer-transition
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapGetters, mapMutations, mapState } from 'vuex';
@Component({
	computed: {
		...mapMutations(['toggleIsTransitioning']),
		...mapState(['fromEl', 'toEl']),
	},
	watch: {
		fromEl: 'fromElChanged',
	},
})
export default class VuerTransition extends Vue {
	public vuerContent: any = null; // the selected component being faded
	public vuer: any = null;
	public fromEl: any;
	public toEl: any;

	public fromElChanged(element: HTMLElement) {
		if (element == null) {
			return;
		}
		this.reset(element);
		this.position(element);
		this.animate();
	}

	public reset(element: HTMLElement) {
		// vuer = old element, which will be null at the start
		if (this.vuer != null) {
			this.$el.removeChild(this.vuer);
		}
		this.$el.appendChild(element.cloneNode(true));
		this.vuer = this.$el.querySelectorAll('.vuer')[0];
		this.vuerContent = this.$el.querySelectorAll('.vuer__content')[0];
	}

	public position(element: HTMLElement) {
		const rect = element.getBoundingClientRect();
		this.$el.style.top = rect.top + 'px';
		this.$el.style.left = rect.left + 'px';
		this.$el.style.display = 'block';
		this.$el.style.position = 'fixed';

		// window.scrollTo(0, 0);
	}

	public animate() {
		this.vuerContent.addEventListener(
			'animationend',
			this.endTransitionFromEl,
		);

		// start animations by adding classes
		this.$el.classList.add('move-up');
		this.vuerContent.classList.add('fade-out');
	}

	public endTransitionFromEl(e: any) {
		const elHeight = this.$el.getBoundingClientRect().height + 'px';
		const vuerHeight = this.vuer.getBoundingClientRect().height + 'px';
		// VUER CONTENT!!!!! ...IS WHAT NEEDS TO BE SELECTED
		const fromHeight =
			this.vuerContent.getBoundingClientRect().height + 'px';
		const toHeight =
			this.toEl
				.querySelectorAll('.vuer__content')[0]
				.getBoundingClientRect().height + 'px';

		this.vuerContent.removeEventListener(
			'animationend',
			this.endTransitionFromEl,
		);
		this.vuer.addEventListener('animationend', this.endTransitionToEl);

		const idx = (document.styleSheets[0] as any).cssRules.length;
		(document.styleSheets[0] as any).insertRule(
			`@keyframes grow {0%{height:${vuerHeight};}100%{height:${toHeight};}}`,
			idx,
		);
		this.vuer.classList.add('growIt');
	}

	public endTransitionToEl(e: any) {
		if (e.target !== this.vuer) {
			return;
		}

		this.toEl.style = 'display:block';
		this.$el.style.display = 'none';
		this.$el.classList.remove('move-up');
		this.$el.classList.remove('fade-out');
		this.vuer.classList.remove('grow');

		this.$store.commit('toggleIsTransitioning'); // false
	}
}
</script>




<style lang="scss">
$duration: 0.5s;
.growIt {
	animation: grow $duration ease-in-out forwards;
}
.move-up {
	animation: moveUp $duration cubic-bezier(0.32, 1, 0.48, 0.98) forwards;
}
// .fade-out div[class^='vuer__']{
// 	animation: fadeOut 1s ease-in-out forwards;
// }
.vuer__content.fade-out {
	animation: fadeOut $duration cubic-bezier(0.32, 1, 0.48, 0.98) forwards;
}

@keyframes fadeOut {
	100% {
		opacity: 0;
	}
}

@keyframes moveUp {
	100% {
		top: 20px;
	}
}
</style>

<style lang="scss" scoped>
</style>
