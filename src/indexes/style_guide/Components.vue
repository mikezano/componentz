<template lang="pug">
	div(style="width:40rem;")
		h1.title {{$route.params.components}}
		transition(name="fade" v-if="$route.params.single_component != null" mode="in-out")
			router-view
		transition(name="fade" 
					v-if="$route.params.single_component == null" 
					mode="out-in")
			transition-group( name="list" tag="div")
				.list-item(v-for="item in currentSet", :key="item")
					vuer(:name="item")
		//vuer_transition
		div {{isSingleComponentRoute}}
</template>


<script lang="ts">
import { mapGetters, mapState, mapMutations } from 'vuex';
import { Component, Prop, Vue } from 'vue-property-decorator';
import Vuer from '@/components/vuer/Vuer.vue';
// import vuer_transition from '@/components/vuer/vuer_transition';

const files = require.context(`../../components/style_guide/`, true, /\.vue$/);

@Component({
	computed: {
		...mapGetters([
			'getComponent',
			'getFiles',
			'getIsSingleComponentRoute',
		]),
		...mapState(['scrollPosition']),
		...mapMutations(['setScrollPosition']),
	},
	components: { Vuer },
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
	public isSingleComponentRoute: boolean = false;
	public getIsSingleComponentRoute!: () => boolean;

	public routeChanged(route: any, old: any) {
		this.currentSet = this.hash.get(route.params.components) as string[];
	}

	public mounted() {
		this.currentSet = this.hash.get(this.components);
		this.isSingleComponentRoute = this.getIsSingleComponentRoute();
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