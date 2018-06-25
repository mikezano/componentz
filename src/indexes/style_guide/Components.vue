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
</template>


<script lang="ts">
import { mapGetters, mapState, mapMutations } from 'vuex';
import { Component, Vue } from 'vue-property-decorator';
import Vuer from '@/components/vuer/Vuer.vue';
// import vuer_transition from '@/components/vuer/vuer_transition';

const files = require.context(`../../components/style_guide/`, true, /\.vue$/);

@Component({
	computed: {
		...mapGetters(['getComponent', 'getFiles']),
		...mapState(['scrollPosition']),
		...mapMutations(['setScrollPosition']),
		},
	components: { Vuer },
})
export default class Components extends Vue {
	public nextRoute: string = '';
	public currentSet: string[] | undefined = [];
	public hash: Map<string, string[]> = new Map<string, string[]>();

	public routeChanged(route: any, old: any) {
		this.currentSet = this.hash.get(route.params.components);
	}

	public buildRegistry() {
		// Loading file names from a folder
		files.keys().forEach( (key: string) => {
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


<script>
// import { mapGetters, mapState, mapMutations } from 'vuex';
// import vuer from '@/components/vuer/vuer';
// import vuer_transition from '@/components/vuer/vuer_transition';
// //https://stackoverflow.com/questions/42199872/is-it-possible-to-import-vue-files-in-a-folder
// const files = require.context(`../../components/style_guide/`, true, /\.vue$/);

// export default {
// 	name: 'components',
// 	props: ['components'],
// 	data() {
// 		return {
// 			hash: [],
// 			currentSet: null,
// 			nextRoute: null,
// 		};
// 	},
// 	beforeMount() {
// 		this.buildRegistry();
// 	},
// 	mounted() {
// 		this.getHtmlSingleFiles();
// 		this.currentSet = this.hash[this.components];
// 	},
// 	computed: {
// 		...mapGetters(['getHtmlSingleFiles', 'getScrollPosition']),
// 		...mapState(['scrollPosition']),
// 		...mapMutations(['setScrollPosition']),
// 	},
// 	methods: {
// 		routeChanged(route, old) {
// 			this.currentSet = this.hash[route.params.components];
// 		},
// 		buildRegistry() {
// 			//Loading file names from a folder
// 			files.keys().forEach(key => {
// 				let path = key.replace(/(\.\/|\.vue)/g, '');
// 				let folder = path.substr(0, path.indexOf('/'));
// 				let file = path.substr(path.indexOf('/') + 1, path.length);

// 				if (!this.hash[folder]) this.hash[folder] = [];
// 				this.hash[folder].push(file);
// 			});
// 		},
// 	},
// 	watch: {
// 		$route: 'routeChanged',
// 	},
// 	components: {
// 		vuer,
// 		vuer_transition,
// 	},
// };
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