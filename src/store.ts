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
		getIsSingleComponentRoute: (state: any) => () => {
			return state.isSingleComponentRoute;
		},
	},
	mutations: {
		setIsSingleComponentRoute(state: any, val: boolean) {
			debugger;
			state.isSingleComponentRoute = val;
		},
	},
	actions: {},
});
