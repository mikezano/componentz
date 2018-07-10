<template lang="pug">
.container
	.title_logos
		img(src="./../../assets/css3.svg" width=50 height=50)
		icon(name="plus", scale="1")
		img(src="./../../assets/sass.svg" width=50 height=50)
	.title_of_site
		//span.dot .
		//span.ads AD&S
		span.left_brace {
		span.style STYLE
		span.colon :
		span.g G
		span.ui UI
		span.de DE
		//span.semi-colon ;
		span.right_brace }
	h1
		span Need creative components to add into your 
		span.ui UI
		span.question_mark ?
	div(@click="collectMixins()")
		RotateDownButton
	.container-carousel
		Carousel
</template>

<script lang="ts">

import { mapGetters } from 'vuex';
import { Component, Prop, Vue } from 'vue-property-decorator';

import RotateDownButton from '@/components/rotateDownBtn.vue';
import Player from '@/components/Player.vue';
import Carousel from '@/components/Carousel.vue';

@Component({
	computed: { ...mapGetters(['getComponent', 'getFiles']) },
	components: { Carousel, RotateDownButton },
})
export default class Home extends Vue {
		public files!: string[];
		public mixinRE: RegExp = new RegExp('@mixin.*?end', 's');
		public allMixins: string = '';
		public words: string =  'Play';
		public isPaused: boolean =  false;
		public getFiles!: () => Map<string, string[]>;

		public mounted() {
				const styleGuideFiles = this.getFiles();

				if (!styleGuideFiles) {
					return;
				}

				this.files = [];
				styleGuideFiles.forEach((values: string[], key: string) => {
					this.files = this.files.concat(values);
				});
		}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../sass/colors';

.container-carousel {
	margin-top: 2rem;
}

.ui {
	color: $vue_green;
}

.title_of_site {
	font-size: 60px;
	font-weight: bold;
	color: $vue_green_dark;
	.dot,
	.left_brace,
	.right_brace,
	.colon,
	.semi-colon {
		color: #aaa;
	}
	.ui {
		color: $vue_green;
		font-size: 70px;
	}
	.style {
		color: $vue_green_dark;
	}
}

.title_logos {
	display: flex;
	align-items: center;
	justify-content: center;
	.fa-icon {
		padding: 0 10px;
	}
}
</style>
