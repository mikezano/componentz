<template lang="pug">
	div
		h1.title {{$route.params.components}}
		transition(name="fade" v-if="$route.params.single_component != null" mode="out-in")
			router-view
		transition(name="fade" 
					v-if="$route.params.single_component == null" 
					mode="out-in")
			transition-group( name="list" tag="div")
				.list-item(v-for="item in currentSet", :key="item")
					vuer(:name="item")
		VuerTransition
</template>


<script lang="ts">
import { mapGetters, mapState, mapMutations } from 'vuex';
import { Component, Prop, Vue } from 'vue-property-decorator';
import Vuer from '@/components/vuer/Vuer.vue';
import VuerSimple from '@/components/vuer/VuerSimple.vue';
import VuerTransition from '@/components/vuer/VuerTransition.vue';

const files = require.context(`../../components/StyleGuide/`, true, /\.vue$/);

@Component({
	computed: {
		...mapGetters(['getComponent', 'getFiles', 'getComponents']),
		...mapState(['scrollPosition']),
		...mapMutations(['setScrollPosition', 'setComponents']),
	},
	components: {
		Vuer,
		VuerSimple,
		VuerTransition,
	},
	watch: {
		$route: 'routeChanged',
	},
})
export default class Components extends Vue {
	@Prop({ default: '' })
	public components!: string;

	public nextRoute: string = '';
	public currentSet: any = null;
	public hash: Map<string, string[]> = new Map<string, string[]>();

	public routeChanged(route: any, old: any) {
		this.currentSet = this.hash.get(this.components) as string[];
		console.log(this.currentSet);
		this.$store.commit('setComponents', this.currentSet);
		
	}

	public mounted() {
		this.currentSet = this.hash.get(this.components);
		
	}
	public beforeMount() {
		this.buildRegistry();
	}

	public buildRegistry() {
		// Loading file names from a folder
		files.keys().forEach((key: string) => {
			const path = key.replace(/(\.\/|\.vue)/g, '');
			const folder = path.substr(0, path.indexOf('/'));
			const file = path.substr(path.indexOf('/') + 1, path.length);

			let currentFolder = this.hash.get(folder);
			if (!currentFolder) {
				this.hash.set(folder, new Array<string>());
				currentFolder = this.hash.get(folder);
			}

			currentFolder!.push(file);
		});
	}
}
</script>


<style lang="scss" scoped>
@import '../../sass/fade';

.title {
	text-transform: uppercase;
	font-weight: bold;
}

.list-enter-active {
	transition: all 0.5s;
}
.list-enter {
	opacity: 0;
}
.list-enter {
	transform: translateX(-30px);
}
.list-enter-to {
	opacity: 1;
}
.list-leave {
	display: none;
}
</style>