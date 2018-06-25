import Vue from 'vue';
import Router from 'vue-router';
import indexes from './indexes';
// import Test from '../views/Test.vue';

Vue.use(Router);

import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Test from '../views/Test.vue';

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/about',
			name: 'about',
			component: About,
		},
		{
			path: '/test',
			name: 'test',
			component: Test,
		},
		{
			path: '/style_guide',
			component: indexes.StyleGuide,
			children: [
				{
					path: '',
					name: 'Home',
					component: indexes.Home,
					children: [
						{
							path: ':single_component',
							name: 'Single Component',
							component: indexes.SingleComponent,
						},
					],
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
							component: indexes.SingleComponent,
							props: true,
						},
					],
				},
				{
					path: 'xyz',
					name: 'xyz',
					component: indexes.XYZ,
				},
			],
		},
	],
});
