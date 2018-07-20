import Vue from 'vue';
import VuePrism from 'vue-prism';
import VueMarkdown from 'vue-markdown';
import App from './App.vue';
import router from './router/index';
import store from './store';

Vue.config.productionTip = false;

import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
Vue.component('icon', Icon);
Vue.component('vue-markdown', VueMarkdown);
Vue.use(VuePrism);

Vue.filter('humanize', (value: string) => {
	if (!value) {
		return '';
	}
	value = value.replace(/([A-Z])/g, ' $1').toUpperCase();
	return value;
});

new Vue({
	router,
	store,
	render: (h: any) => h(App),
}).$mount('#app');
