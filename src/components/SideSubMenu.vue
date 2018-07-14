<template lang="pug">
.side-sub-menu
	.side-sub-menu__item(v-for="i in ids")
		a(:href="i.id") {{i.name}}


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

	public components!:string[];
	public ids!:any[];
	// public mounted(){

	// }
	public componentsChanged(newComponents: string[]){
		this.components = newComponents;
		this.ids = this.components.map(x =>{return{name: x, id:"#" + x}});
		debugger;
	}
}
</script>

<style lang="scss" scoped>
.side-sub-menu {
	position: fixed;
	top: 6rem;
	left: 2rem;
}
</style>


