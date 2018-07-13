<template lang="pug">
.side-sub-menu
	.side-sub-menu__item
		a(href="#LeftColumn") Sample1
	.side-sub-menu__item
		a(href="") Sample2

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapGetters, mapState} from 'vuex';
@Component({
	...mapGetters(['getComponents']),
	...mapState(['components']),
	watch: {

	}
})
export default class SideSubMenu extends Vue {

	public mounted(){

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


