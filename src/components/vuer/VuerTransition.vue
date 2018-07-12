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

	public fromElChanged(newEl: any, oldEl: any) {
		if (newEl == null) return;

		// vuer = old element, which will be null at the start
		if (this.vuer != null) {
			this.$el.removeChild(this.vuer);
		}

		this.vuer = newEl; // vuer is the fromEl

		// Set up this element with the 'old'
		this.$el.appendChild(this.vuer.cloneNode(true));
		this.$el.style.display = 'block';
		this.$el.style.position = 'fixed';

		let rect = this.vuer.getBoundingClientRect();
		this.$el.style.top = rect.top + 'px';
		this.$el.style.left = rect.left + 'px';

		this.vuerContent = this.$el.querySelectorAll('.vuer__content')[0]; //selecting the inside of the current el
		this.vuerContent.addEventListener(
			'animationend',
			this.endTransitionFromEl,
		);

		// start animations by adding classes
		this.$el.classList.add('move-up');
		this.vuerContent.classList.add('fade-out');

		//let elHeight = this.$el.getBoundingClientRect().height + 'px';
		//let fromHeight = this.vuerContent.getBoundingClientRect().height + 'px';
		//let toHeight = this.toEl.getBoundingClientRect().height + 'px';
	}

	public endTransitionFromEl(e: any) {
		this.vuer = this.$el.querySelectorAll('.vuer')[0];

		let elHeight = this.$el.getBoundingClientRect().height + 'px';
		let vuerHeight = this.vuer.getBoundingClientRect().height + 'px';
		// VUER CONTENT!!!!! ...IS WHAT NEEDS TO BE SELECTED
		let fromHeight = this.vuerContent.getBoundingClientRect().height + 'px';
		let toHeight =
			this.toEl
				.querySelectorAll('.vuer__content')[0]
				.getBoundingClientRect().height + 'px';

		//this.toEl.style = 'display:none';
		//debugger;
		this.vuerContent.removeEventListener(
			'animationend',
			this.endTransitionFromEl,
		);
		this.vuer.addEventListener('animationend', this.endTransitionToEl);

		var idx = (document.styleSheets[0] as any).cssRules.length;
		(document.styleSheets[0] as any).insertRule(
			`@keyframes grow {0%{height:${vuerHeight};}100%{height:${toHeight};}}`,
			idx,
		);
		this.vuer.classList.add('growIt');
	}

	public endTransitionToEl(e: any) {
		if (e.target != this.vuer) return;

		this.toEl.style = 'display:block';
		this.$el.style.display = 'none';
		this.$el.classList.remove('move-up');
		this.$el.classList.remove('fade-out');
		this.vuer.classList.remove('grow');

		this.$store.commit('toggleIsTransitioning'); //false
	}
}
</script>




<style lang="scss">
.growIt {
	animation: grow 0.5s ease-in-out forwards;
}
.move-up {
	animation: moveUp 0.5s cubic-bezier(0.32, 1, 0.48, 0.98) forwards;
}
// .fade-out div[class^='vuer__']{
// 	animation: fadeOut 1s ease-in-out forwards;
// }
.vuer__content.fade-out {
	animation: fadeOut 0.5s cubic-bezier(0.32, 1, 0.48, 0.98) forwards;
}

@keyframes fadeOut {
	100% {
		opacity: 0;
	}
}

@keyframes moveUp {
	100% {
		top: 105px;
	}
}
</style>

<style lang="scss" scoped>
</style>
