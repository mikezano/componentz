<template lang="pug">
	.container
		ComponentCarousel(
			:isPlaying="isPlaying"
			v-on:carouselStop="carouselStop()"
			ref="cc")
		//- Player( 
		//- 	:isPlaying="isPlaying"
		//- 	v-on:togglePlayer="togglePlayer()"
		//- 	v-on:goBack="goBack()"
		//- 	v-on:goForward="goForward()")
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
// import Player from '@/components/Player'
import ComponentCarousel from '@/components/ComponentCarousel.vue';
@Component({
	computed: {
		...mapGetters(['getComponent', 'getFiles', 'getHtmlSingleFile']),
	},
	components: {
		// Player,
		ComponentCarousel,
	},
})
export default class Carousel extends Vue {
	public isPlaying: boolean = true;

	public carouselStop() {
		this.isPlaying = false;
	}
	public goBack() {
		(this.$refs.cc as ComponentCarousel).goBack();
	}
	public goForward() {
		(this.$refs.cc as ComponentCarousel).goForward();
	}
	public togglePlayer() {
		this.isPlaying = !this.isPlaying;
	}
}
</script>