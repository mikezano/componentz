
<template lang="pug">
	#app
		.navicon(@click="toggleSideMenu")
			icon(name="bars" scale="2")
		transition(name="slide-menu")
			SideMenu(
				v-if="isShowingSideMenu" 
				v-on:closeMenu="toggleSideMenu")
		SideSubMenu
		transition(name="fade" mode="out-in")
			router-view
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import SideMenu from '@/components/SideMenu.vue';
import SideSubMenu from '@/components/SideSubMenu.vue';

@Component({
	components: {
		SideMenu,
		SideSubMenu,
	},
})
export default class App extends Vue {
	public isShowingSideMenu: boolean = false;
	public app: HTMLElement | null = null;

	public mounted(): void {
		this.app = document.getElementById('app');
	}

	public toggleSideMenu() {
		this.isShowingSideMenu = !this.isShowingSideMenu;

		if (this.isShowingSideMenu === true) {
			this.app!.addEventListener('click', this.closeSideMenu, {
				capture: true,
			});
		}
	}
	public closeSideMenu() {
		this.isShowingSideMenu = false;
		this.app!.removeEventListener('click', this.closeSideMenu);
	}
}
</script>

<style lang="scss">
@import './sass/prism.css';
@import './sass/fade';
@import url('https://fonts.googleapis.com/css?family=Titillium+Web');

html {
	overflow-y: scroll;
}

#app {
	font-family: 'Titillium Web', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	margin-top: 20px;
}

body {
	background: radial-gradient(
				circle farthest-side at 0% 50%,
				hsla(0, 0%, 92%, 1) 23.5%,
				rgba(240, 166, 17, 0) 0
			)
			21px 30px,
		radial-gradient(
				circle farthest-side at 0% 50%,
				hsla(0, 0%, 90%, 1) 24%,
				rgba(240, 166, 17, 0) 0
			)
			19px 30px,
		linear-gradient(
				hsla(0, 0%, 92%, 1) 14%,
				rgba(240, 166, 17, 0) 0,
				rgba(240, 166, 17, 0) 85%,
				hsla(0, 0%, 92%, 1) 0
			)
			0 0,
		linear-gradient(
				150deg,
				hsla(0, 0%, 92%, 1) 24%,
				hsla(0, 0%, 90%, 1) 0,
				hsla(0, 0%, 90%, 1) 26%,
				rgba(240, 166, 17, 0) 0,
				rgba(240, 166, 17, 0) 74%,
				hsla(0, 0%, 90%, 1) 0,
				hsla(0, 0%, 90%, 1) 76%,
				hsla(0, 0%, 92%, 1) 0
			)
			0 0,
		linear-gradient(
				30deg,
				hsla(0, 0%, 92%, 1) 24%,
				hsla(0, 0%, 90%, 1) 0,
				hsla(0, 0%, 90%, 1) 26%,
				rgba(240, 166, 17, 0) 0,
				rgba(240, 166, 17, 0) 74%,
				hsla(0, 0%, 90%, 1) 0,
				hsla(0, 0%, 90%, 1) 76%,
				hsla(0, 0%, 92%, 1) 0
			)
			0 0,
		linear-gradient(
				90deg,
				hsla(0, 0%, 90%, 1) 2%,
				hsla(0, 0%, 92%, 1) 0,
				hsla(0, 0%, 92%, 1) 98%,
				hsla(0, 0%, 90%, 1) 0%
			)
			0 0 hsla(0, 0%, 92%, 1);

	background-size: 40px 60px;
	background-attachment: fixed;
	background-color: #eee;
}
.navicon {
	position: fixed;
	left: 30px;
	top: 30px;
	img {
		width: 30px;
		height: 30px;
	}
}
.slide-menu-enter-active,
.slide-menu-leave-active {
	transition: all 0.3s ease;
}
.slide-menu-enter,
.slide-menu-leave-to {
	transform: translateX(-200px);
}
</style>
