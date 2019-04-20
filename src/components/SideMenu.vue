<template lang="pug">
	.side-menu
		.side-menu__close(@click="close")
		.side-menu__header
			img(src="./../assets/logo.png")
			router-link(to="/StyleGuide" tag="p") Style Guide
		
		.side-menu__sections
			.side-menu__section-header Usage
			ul.side-menu__section-list
				router-link(to="/how_to_use" tag="li") How to use
			.side-menu__divider

			.side-menu__section-header Components
			ul.side-menu__section-list
				router-link(
					:to="`/StyleGuide/${item.category}`"
					tag="li"
					@click.native="openSubMenu(item)"
					v-for="item in menuItems") 
					.side-menu__section-item(
						:class="{'side-menu__section-item--is-open': item.isOpen}") 
							| {{item.category}}
					transition-group(name="list2", tag="ul" class="side-menu__sub-section-list" )
						li.side-menu__sub-section-item(
							v-show="item.isOpen"
							v-for="x in item.subCategories" :key="x") &#183; {{x}}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapGetters, mapState } from 'vuex';
@Component({
	computed: {
		...mapGetters(['getComponentsMap']),
	},
})
export default class SideMenu extends Vue {
	public getComponentsMap!: () => any;
	public componentsMap: any = null;
	public menuItems: {
		category: string;
		subCategories: string[];
		isOpen: boolean;
	}[] = [];
	public currentMenuItem: { category: string; isOpen: boolean } = {
		category: '',
		isOpen: false,
	};

	public close() {
		//this.$emit('closeMenu');
	}

	public mounted(): void {
		this.componentsMap = this.getComponentsMap();

		this.componentsMap.forEach(
			(componentNames: string[], componentsType: string) => {
				this.menuItems.push({
					category: componentsType,
					subCategories: componentNames,
					isOpen: false,
				});
			},
		);
	}

	public openSubMenu(item: { category: string; isOpen: boolean }): void {
		this.currentMenuItem = item;
		item.isOpen = !item.isOpen;

		setTimeout(() => {
			this.closePreviousMenuItem();
		}, 500);
	}

	public closePreviousMenuItem(): void {
		this.menuItems.forEach(mi => {
			if (mi.category == this.currentMenuItem.category) return;
			mi.isOpen = false;
		});
	}
}
</script>

<style lang="scss">
@import '../sass/grow';

$base1: hsla(153, 50%, 48%, 1);
$base2: hsla(211, 28%, 29%, 1);

.list2-enter-active,
.list2-leave-active {
	transition: all 0.2s;
}
.list2-enter, .list2-leave-to /* .list-leave-active below version 2.1.8 */ {
	opacity: 0;
	height: 0;
}
.list2-enter-to,
.list2-leave {
	height: 21px;
	//padding:5px 0;
}

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
	&__section-item {
		margin-top: 0.5rem;
	}
	&__section-item:hover {
		font-weight: bold;
	}
	&__section-item--is-open {
		text-decoration: underline;
		font-weight: bold;
	}
	&__sub-section-item {
		padding: 0;
	}
	&__divider {
		border-top: 1px solid #555;
		margin: 10px;
	}
	&__section-list,
	&__sub-section-list {
		list-style-type: none;
		margin: 0;
		padding: 0;
		padding-left: 10px;
		text-align: left;
	}
	&__section-item,
	&__sub-section-item {
		font-size: 1rem;
		color: #aaa;
		&:hover {
			color: white;
			cursor: pointer;
		}
	}
}
</style>