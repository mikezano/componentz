<template lang="pug">
.side-sub-menu
	.side-sub-menu__item(v-for="i in ids")
		a(:href="i.i") {{i.n}}
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
		this.ids = newComponents.map( (x: string) => ({n: x, i:"#" + x}));
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


