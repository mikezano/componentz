<template lang="pug">
	vuer(:name="example" :class="{'dont-show' : isTransitioning}")
</template>


<script lang="ts">
import { Component as ComponentDecorator, Prop, Vue } from 'vue-property-decorator';
import { mapState, mapMutations } from 'vuex';
import Vuer from '@/components/vuer/Vuer.vue';
@ComponentDecorator({
	computed: {
		...mapMutations(['setToEl']),
		...mapState(['isTransitioning']),
	},
	components: { Vuer },
	watch: {
		isTransitioning: 'isTransitioningChanged',
	},
})
export default class Component extends Vue {
	@Prop() public singleComponent: any;

	public vuerFader: any = null;
	public example: any = null;
	public isTransitioning: any;

	public mounted() {
		this.$store.commit('setToEl', this.$el);
		this.vuerFader = this.$el.querySelectorAll('.vuer__content')[0];
		if (
			this.$route.params.single_component != null &&
			this.isTransitioning == false
		) {
			this.reveal();
			this.example = this.$route.params.single_component + 'Examples';
		}
	}

	public destroyed() {
		this.$el.classList.add('dont-show');
		this.vuerFader.classList.add('dont-show');
	}

	public reveal() {
		this.$el.classList.remove('dont-show');
		this.vuerFader.classList.add('fade-in');
	}

	public isTransitioningChanged(newVal: boolean, oldVal: boolean) {
		if (newVal == false) {
			this.reveal();
		}
	}
}
</script>

<style lang="scss" scoped>
.dont-show {
	opacity: 0;
}
</style>
<style lang="scss">
.vuer__content {
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

