import Vue from 'vue';
import Vuex from 'vuex';
import registry from './store/registry';
import { debug } from 'util';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		counter: 2,
		//check: registry,
		isSingleComponentRoute: false,
		fromEl: null,
		toEl: null,
		isTransitioning: false,
		scrollPosition: 0,
		currentComponents: [],
		vueComponents: registry.vueComponents,
		componentsMap: registry.componentsMap,
		componentsHtmlFileHash: registry.componentsHtmlFileHash,
	},
	getters: {
		getFiles: (state: any, getters) => () => {
			return state.componentsMap;
		},
		getComponent: (state: any, getters) => (name: string) => {
			let result = state.vueComponents.filter(
				x => x.default.options.name === name,
			);

			return result[0];
		},
		getHtmlSingleFile: (state: any, getters) => (name: string) => {
			return state.componentsHtmlFileHash.get(name);
		},
		getScrollPosition: (state, getters) => () => {
			return state.scrollPosition;
		},
		getCurrentComponents: (state, getters) => () => {
			return state.currentComponents;
		},
		getComponentTypes: (state, getters) => () => {
			return [...state.componentsMap.keys()];
		},
		getComponentsByType: (state, getters) => (type: string) => {
			return state.componentsMap.get(type);
		},
		getComponentsMap: (state, getters) =>() =>{
			return state.componentsMap;
		}
	},
	mutations: {
		setFromEl: (state, el) => {
			console.log(el, 'SetFromEl store.ts');
			state.fromEl = el;
		},
		setToEl: (state, el) => {
			state.toEl = el;
		},
		setScrollPosition: (state, el) => {
			state.scrollPosition = el;
		},
		toggleIsTransitioning: state => {
			state.isTransitioning = !state.isTransitioning;
		},
		setCurrentComponents: (state, components: string[]) => {
			state.currentComponents = components;
		},
	},
	actions: {},
});
