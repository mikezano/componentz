<template lang="pug">
	.vuer
		.vuer__header
			| {{name | humanize}}
		.vuer__component
			component(:is="component" v-if="component != null")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
@Component({
	computed: { ...mapGetters(['getComponent']) },
})
export default class VuerSimple extends Vue {
	public component: any = null;
	public getComponent!: (name: string) => any;

	@Prop() private name!: string;

	public mounted() {
		this.component = this.getComponent(this.name).default;
	}
}
</script>

<style lang="scss" scoped>
@import '../../sass/global.scss';

.vuer {
	padding: 1rem 2rem;
	margin-bottom: 3rem;
	border: 1px solid lightgray;
	position: relative;
	background-color: hsla(0, 0%, 0%, 0.05);
	display: flex;
	flex-direction: column;
	align-items: center;
	min-width: 5rem;

	&__component {
		margin: 2rem 0;
	}

	&__header {
		font-weight: bold;
		font-size: 2rem;
	}
}
</style>
