<template lang="pug">
	.player
		button.player__backward(@click="goBack()")
			icon(name="step-backward")
		button.player__toggle-play(@click="togglePlayer()")
			icon(name="play", scale="2" v-if="!isPlaying")
			icon(name="pause", scale="2" v-else)
		button.player__forward(@click="goForward()")
			icon(name="step-forward")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Player extends Vue {
	@Prop() private isPlaying: boolean = false;

	public togglePlayer() {
		this.$emit('togglePlayer');
	}
	public goBack() {
		this.$emit('goBack');
	}
	public goForward() {
		this.$emit('goForward');
	}
}
</script>



<style lang="scss" scoped>
@import '../sass/colors';

.player {
	&__toggle-play,
	&__backward,
	&__forward {
		border: 2px solid darken($vue_green, 10%);
		background-color: $vue_green;
		color: white;
		margin: 2px;
	}

	&__toggle-play {
		padding: 10px 20px;
	}
	&__backward,
	&__forward {
		padding: 5px 10px;
	}
}
</style>
