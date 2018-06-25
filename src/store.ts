import Vue from 'vue';
import Vuex from 'vuex';
import registry from './store/registry';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		counter: 2,
		check: registry,
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
	},
	mutations: {},
	actions: {},
});
