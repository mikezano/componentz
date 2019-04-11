<template lang="pug">
.side-sub-menu
	.side-sub-menu__title
		| {{$route.params.components}}
	.side-sub-menu__item(v-for="i in ids")
		button(:href="i.id" @click="scrollTo(i.name)") {{i.name}}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapGetters, mapState } from 'vuex';
@Component({
	computed: {
		...mapGetters(['getCurrentComponents']),
		...mapState(['currentComponents']),
	},
	watch: {
		currentComponents: 'currentComponentsChanged',
	},
})
export default class SideSubMenu extends Vue {
	public ids: any[] = [];
	public getCurrentComponents!: () => string[];

	public mounted() {
		const components = this.getCurrentComponents();
		this.ids = components.map((x: string) => ({ name: x, id: '#' + x }));
	}
	public currentComponentsChanged(newComponents: string[]) {
		this.ids = newComponents.map((x: string) => ({ name: x, id: '#' + x }));
	}

	public scrollTo(id: string) {
		console.log(this.$router);
		const componentsRoute = this.$route.fullPath.replace(
			this.$route.params.single_component,
			'',
		);

		this.$router.push(componentsRoute);

		const el = document.getElementById(id);
		this.smoothScrollTo(el!, 200);
	}

	public smoothScrollTo(element: HTMLElement, duration: number) {
		if (duration < 1) {
			return;
		}
		const difference = element!.getBoundingClientRect().top;
		const perTick = (difference / duration) * 10;
		setTimeout(() => {
			window.scrollTo(0, window.pageYOffset + perTick);
			this.smoothScrollTo(element, duration - 10);
		}, 10);
	}
}
</script>

<style lang="scss" scoped>
.side-sub-menu {
	position: fixed;
	top: 6rem;
	left: 2rem;

	&__title,
	&__item {
		padding: 0.1rem;
	}

	&__title {
		font-size: 1.5em;
	}

	&__item {
		button {
			border: none;
			background: none;
			cursor: pointer;

			&:focus {
				font-weight: bold;
				outline: none;
			}
		}
	}
}
</style>


