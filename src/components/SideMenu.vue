<template lang="pug">
	.side-menu
		.side-menu__close(@click="close")
			//icon(name="close" class="close-icon")
		.side-menu__header
			img(src="./../assets/logo.png")
			router-link(to="/StyleGuide" tag="p") Style Guide
		
		.side-menu__sections
			.side-menu__section-header Usage
			ul.side-menu__section-list
				router-link(to="/how_to_use" tag="li") How to use
			.divider
			.side-menu__section-header Components
			ul.side-menu__section-list
				router-link(
					:to="`/StyleGuide/${item.type}`"
					tag="li"
					@click.native="openSubMenu(item)"
					v-for="item in menuItems") 
					span.side-menu__section-item {{item.type}}
					transition(v-on:before-enter="beforeEnter")
						div.before-height(v-if="item.isOpen")
							ul.side-menu__sub-section-list
								li.side-menu__sub-section-item(
									v-for="x in getComponentsByType(item.type)") &#183; {{x}}
			.divider
			.side-menu__section-header How To
			ul.side-menu__section-list
				router-link(to="/StyleGuide/Gridlayouts" tag="li") CSS Grid
			.divider
			.side-menu__section-header Naming
			ul.side-menu__section-list
				router-link(to="/bem", tag="li") B.E.M
				router-link(to="/test" tag="li") Test
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapGetters, mapState } from 'vuex';
@Component({
	computed: {
		...mapGetters([
			'getCurrentComponents',
			'getComponentTypes',
			'getComponentsByType',
		]),
		...mapState(['currentComponents']),
	},
})
export default class SideMenu extends Vue {
	public getCurrentComponents!: () => string[];
	public getComponentTypes!: () => string[];
	public getComponentsByType!: (type: string) => string[];
	public componentTypes: string[] = [];
	public components: string[] = [];
	public menuItems: { type: string; isOpen: boolean }[] = [];
	public currentMenuItem: { type: string; isOpen: boolean } = {
		type: '',
		isOpen: false,
	};

	public close() {
		//this.$emit('closeMenu');
	}

	public mounted(): void {
		this.components = this.getCurrentComponents();
		this.componentTypes = this.getComponentTypes();
		this.menuItems = this.componentTypes.map(ct => {
			return { type: ct, isOpen: false };
		});
	}

	public openSubMenu(item: { type: string; isOpen: boolean }): void {
		this.currentMenuItem = item;
		item.isOpen = true;
	}

	public enter(): void {
		alert('enter');
	}
	public afterEnter(): void {
		this.menuItems.forEach(mi => {
			if (mi.type == this.currentMenuItem.type) return;
			mi.isOpen = false;
		});
	}
	public beforeEnter(el: HTMLElement): void {
		// el.style.height = '100px';
		// el.style.overflow = 'hidden';
		// el.style.transition = 'all 1s ease-in';
		el.classList.add('after-height');
	}
}
</script>

<style lang="scss">
@import '../sass/grow';

$base1: hsla(153, 50%, 48%, 1);
$base2: hsla(211, 28%, 29%, 1);

.close-icon {
	position: absolute;
	right: 0;
	margin: 10px 10px 0 0;
}

.side-menu {
	width: 200px;
	position: fixed;
	z-index: 100;
	left: 0px;
	top: 0;
	bottom: 0;
	$yellow: hsla(0, 0%, 13%, 1);
	$yellow2: hsla(0, 0%, 17%, 1);
	$yellow3: rgba(240, 166, 17, 0);
	background: radial-gradient(
				circle farthest-side at 0% 50%,
				$yellow2 23.5%,
				$yellow3 0
			)
			21px 30px,
		radial-gradient(circle farthest-side at 0% 50%, $yellow 24%, $yellow3 0)
			19px 30px,
		linear-gradient($yellow2 14%, $yellow3 0, $yellow3 85%, $yellow2 0) 0 0,
		linear-gradient(
				150deg,
				$yellow2 24%,
				$yellow 0,
				$yellow 26%,
				$yellow3 0,
				$yellow3 74%,
				$yellow 0,
				$yellow 76%,
				$yellow2 0
			)
			0 0,
		linear-gradient(
				30deg,
				$yellow2 24%,
				$yellow 0,
				$yellow 26%,
				$yellow3 0,
				$yellow3 74%,
				$yellow 0,
				$yellow 76%,
				$yellow2 0
			)
			0 0,
		linear-gradient(90deg, $yellow 2%, $yellow2 0, $yellow2 98%, $yellow 0%)
			0 0 $yellow2;
	background-size: 40px 60px;
	color: white;
	box-shadow: 2px 2px 20px gray;
	&__header {
		background: linear-gradient(to right, $base1, $base2);
		padding: 2rem 0;
		margin-left: 0rem;
		display: flex;
		justify-content: center;
		align-items: center;
		img {
			width: 30px;
			height: 30px;
			transition: transform 0.3s ease-out;
		}
		&:hover {
			cursor: pointer;
			text-decoration: underline;
			img {
				transform: rotateY(180deg);
			}
		}
		p {
			margin: 0;
		}
	}
	&__sections {
		padding-left: 10px;
	}
	&__section-header {
		margin: 10px 0;
		font-weight: bold;
		margin-left: 10px;
	}
	&__section-item:hover {
		font-weight: bold;
	}
	p {
		font-weight: bold;
	}
	.divider {
		border-top: 1px solid #555;
		margin: 10px;
	}
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		padding-left: 10px;
		text-align: left;
	}
	li {
		padding: 5px 0;
		font-size: 14px;
		color: #aaa;
		&:hover {
			color: white;
			cursor: pointer;
		}
	}
}

.before-height {
	height: 0;
	overflow: hidden;
	transition: all 1s ease-in-out;
}

.after-height {
	height: 100px;
}
</style>


