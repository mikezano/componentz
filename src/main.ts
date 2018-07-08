//import '../public/prism.css';
//import '../public/prism.js';
import Vue from 'vue';
import VuePrism from 'vue-prism';
import App from './App.vue';
import router from './router/index';
import store from './store';

Vue.config.productionTip = false;

import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
Vue.component('icon', Icon);
Vue.use(VuePrism);

// require('../public/prism.css');

new Vue({
	router,
	store,
	render: (h: any) => h(App),
}).$mount('#app');
