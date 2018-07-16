<template lang="pug">
.side-sub-menu
	.side-sub-menu__item(v-for="i in ids")
		button(:href="i.id" @click="scrollTo(i.name)") {{i.name}}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapGetters, mapState} from 'vuex';
@Component({
	computed:{
		...mapGetters(['getComponents']),
		...mapState(['components']),
	},
	watch: {
		components: 'componentsChanged'
	},
})
export default class SideSubMenu extends Vue {

	public ids:any[] = [];

	public componentsChanged(newComponents: string[]){
		this.ids = newComponents.map( (x: string) => ({name: x, id:"#" + x}));
	}

	public scrollTo(id: string){
		let element = document.getElementById(id);
		let top = element!.getBoundingClientRect().top;

		window.scrollTo(0, window.pageYOffset + top);
	}
}
</script>

<style lang="scss" scoped>
.side-sub-menu {
	position: fixed;
	top: 6rem;
	left: 2rem;

	&__item{
		button{
			border: none;
			padding: .2rem;
			cursor: pointer;
		}
	}
}
</style>


