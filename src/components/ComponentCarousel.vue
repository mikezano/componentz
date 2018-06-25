<template lang="pug">
	div
		transition( name="move_left_right" mode="out-in" )
			VuerSimple(:name="file" v-if="file" :key="file")
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import VuerSimple from '@/components/vuer/VuerSimple.vue';
@Component({
	computed: { ...mapGetters(['getComponent', 'getFiles']) },
	components: {
		VuerSimple,
	},
})
export default class ComponentCarousel extends Vue {

	public files: string[] = [];
	public file: string = '';
	public intervalPlayer: any = null;
	public fileCarouselList: string[] = [];
	public fileCarouselIndex: number = 0;
	public message: string = 'ZZZano';

	public getFiles!: () => Map<string, string[]>;

	 @Prop() private isPlaying!: boolean;


	public mounted(): void {

		const styleGuideFiles = this.getFiles();

		if (!styleGuideFiles) {
			return;
		}
		this.files = [];
		styleGuideFiles.forEach((values: string[], key: string) => {
			this.files = this.files.concat(values);
		});

		this.file = this.files[Math.floor(Math.random() * this.files.length)];
		this.intervalPlayer = setInterval(this.changeComponent, 5000);
	}

	public goBack() {
		this.fileCarouselIndex =
			this.fileCarouselIndex === 0 ? 0 : --this.fileCarouselIndex;
		const file = this.fileCarouselList[this.fileCarouselIndex];
		this.stopAndChangeFile(file);
	}

	public goForward() {
		this.fileCarouselIndex =
			this.fileCarouselIndex === this.fileCarouselList.length - 1
				? this.fileCarouselList.length - 1
				: ++this.fileCarouselIndex;
		const file = this.fileCarouselList[this.fileCarouselIndex];
		this.stopAndChangeFile(file);
	}

	public stopAndChangeFile(file: string): void {
		this.toggle(false);
		this.file = file;
		this.$emit('carouselStop');
	}

	public selectRandomComponent(): string {
		return this.files[Math.floor(Math.random() * this.files.length)];
	}

	public changeComponent() {
		const file = this.selectRandomComponent();
		this.updateList(file);
	}

	public updateList(file: string) {
		if (this.fileCarouselList.length > 5) {
			this.fileCarouselList.splice(0, 1);
		}
		this.fileCarouselList.push(file);
		this.fileCarouselIndex = this.fileCarouselList.length - 1;

		this.file = file;
	}

	public toggle(state: boolean) {
		if (!state) {
			clearInterval(this.intervalPlayer);
			this.intervalPlayer = null;
		} else {
			this.changeComponent();
			this.intervalPlayer = setInterval(this.changeComponent, 5000);
		}
	}
}
</script>


<style lang="scss" scoped>
@import '../sass/colors';
@import '../sass/move_left_right';
</style>
