<template lang="pug">
	div
		transition(name="fade" v-if="$route.params.single_component != null" mode="out-in")
			router-view
		transition(name="fade" 
					v-if="$route.params.single_component == null" 
					mode="out-in")
			transition-group( name="list" tag="div" class="list-group")
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
		...mapGetters(['getComponent', 'getComponents', 'getComponentsByType']),
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
	public getComponentsByType!: (type: string) => Map<string, string[]>;

	public routeChanged(route: any, old: any) {
		this.setCurrentComponents();
	}

	public mounted() {
		this.setCurrentComponents();
	}

	public setCurrentComponents() {
		if (this.$route.params.single_component == null) {
			// window.scrollTo(0, 0);
		}
		//this.currentSet = this.hash.get(this.components);
		this.currentSet = this.getComponentsByType(this.components);
		this.$store.commit('setCurrentComponents', this.currentSet);
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

.list-group {
	//border:1px solid orange;
}
.list-enter-active {
	transition: all 0.5s 0.5s;
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
