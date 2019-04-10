import Vue from 'vue';
import Vuex from 'vuex';
import registry from './store/registry';
import { debug } from 'util';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		counter: 2,
		check: registry,
		isSingleComponentRoute: false,
		fromEl: null,
		toEl: null,
		isTransitioning: false,
		scrollPosition: 0,
		components: [],
		componentHash: registry.componentHash
	},
	getters: {
		getFiles: (state: any, getters) => () => {
			return state.componentHash;
		},
		getComponent: (state: any, getters) => (name: string) => {
			const result = state.check.get(name);
			return result;
		},
		getHtmlSingleFile: (state: any, getters) => (name: string) => {
			const result = state.check.singleFileHash.get(name);
			return result;
		},
		getScrollPosition: (state, getters) => () => {
			return state.scrollPosition;
		},
		getComponents: (state, getters) => () => {
			return state.components;
		},
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
		setComponents: (state, components: string[]) => {
			state.components = components;
		},
	},
	actions: {},
});
