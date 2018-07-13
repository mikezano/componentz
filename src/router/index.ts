import Vue from 'vue';
import Router from 'vue-router';
import indexes from './indexes';

Vue.use(Router);

import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Test from '../views/Test.vue';

export default new Router({
	routes: [
		{ path: '/', redirect: '/StyleGuide' },
		{
			path: '/test',
			name: 'test',
			component: Test,
		},
		{
			path: '/StyleGuide',
			component: indexes.StyleGuide,
			children: [
				{
					path: '',
					name: 'Home',
					component: indexes.Home,
				},
				{
					path: ':components',
					name: 'Components',
					component: indexes.Components,
					props: true,
					children: [
						{
							path: ':single_component',
							name: 'Single Component',
							component: indexes.Component,
							props: true,
						},
					],
				},
			],
		},
	],
});
