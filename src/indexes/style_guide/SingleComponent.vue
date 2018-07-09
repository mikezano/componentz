<template lang="pug">
	vuer(:name="example" :class="{'dont-show' : single_component != null}")
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapState, mapMutations } from 'vuex';
@Component({
	computed: {
		...mapState(['isTransitioning']),
		...mapMutations(['setToEl', 'setIsSingleComponentRoute']),
	},
})
export default class SingleComponent extends Vue {
	@Prop() public singleComponent: any;

	public vuerFader: any = null;
	public example: any = this.singleComponent + '_examples';

	public isTransitioning: boolean = false;

	public mounted() {
		this.$store.commit('setToEl', this.$el);
		this.$store.commit('setIsSingleComponentRoute', true);

		this.vuerFader = this.$el.querySelectorAll('.vuer__fader')[0];

		if (
			this.$route.params.single_component != null &&
			this.isTransitioning === false
		) {
			this.reveal();
		}
	}
	public destroyed() {
		debugger;
		this.$el.classList.add('dont-show');
		//this.vuerFader.classList.add('dont-show');
		this.$store.commit('setIsSingleComponentRoute', false);
	}
	public reveal() {
		this.$el.classList.remove('dont-show');
		this.vuerFader.classList.add('fade-in');
	}
}
</script>

<style lang="scss" scoped>
.dont-show {
	opacity: 0;
}
</style>
<style lang="scss">
.vuer__fader {
	&.fade-in {
		animation: fadeIn 2.5s cubic-bezier(0.32, 1, 0.48, 0.98) forwards;
	}
}
@keyframes fadeIn {
	from {
		opacity: 0;
		height: 0%;
	}
	to {
		opacity: 1;
		height: 100%;
	}
}
</style>

