import Vue from 'vue';
import Router from 'vue-router';
import indexes from './indexes';
import examples from './examples';

Vue.use(Router);

import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Test from '../views/Test.vue';
import Bem from '../views/Bem.vue';

export default new Router({
	routes: [
		{ path: '/', redirect: '/StyleGuide' },
		{
			path: '/test',
			name: 'test',
			component: Test,
		},
		{
			path: '/bem',
			component: Bem,
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
		{
			path: '/example0',
			component: examples.Zero,
		},
		{
			path: '/example1',
			component: examples.One,
		},
		{
			path: '/example2',
			component: examples.Two,
		},
		{
			path: '/example3',
			component: examples.Three,
		},
		{
			path: '/example4',
			component: examples.Four,
		},
		{
			path: '/example5',
			component: examples.Five,
		},
	],
	scrollBehavior(to, from, savedPosition) {
		if (to.name !== 'Components') {
			return { x: 0, y: 0 };
		}

		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(savedPosition);
			}, 250);
		});
	},
});
