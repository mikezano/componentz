<template lang="pug">
	div
		h1 Test Page {{message}}
		FadeTransition(mode="out-in")
			div.box(key="a" v-if="show") The Fade
			div.box(key="b" v-else) The Other

		button(@click="toggleShow()") Click me!

</template>

<script lang="ts">
// import routes from '@/models/routes';
import { Component, Prop, Vue } from 'vue-property-decorator';
import FadeTransition from '@/views/FadeTransition.vue';

@Component({
	components: { FadeTransition },
})
export default class Test extends Vue {
	@Prop() public name!: string;
	public message: string = 'Hi';

	public show: boolean = true;

	public toggleShow(): void {
		this.show = !this.show;
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
