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
	},
	getters: {
		getFiles: (state: any, getters) => () => {
			const result = state.check.buildRegistry();
			return result;
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
	},
	mutations: {
		setFromEl: (state, el) => {
			state.fromEl = el;
		},
		setToEl: (state, el) => {
			state.toEl = el;
		},
		setScrollPosition: (state, el) => {
			console.log('store scroll pos:', el);
			state.scrollPosition = el;
		},
		toggleIsTransitioning: state => {
			state.isTransitioning = !state.isTransitioning;
		},
	},
	actions: {},
});
