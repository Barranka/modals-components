//Default
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//Pages
import Modals from '@/pages/Modals'
import Auth from '@/pages/Auth'

//Routering
export default new Router({
	// mode: 'history',
	scrollBehavior: () => ({ x: 0, y: 0 }),
	routes: [
		{
			path: '/',
			name: 'modals',
			component: Modals
		},
		{
			path: '/auth',
			name: 'auth',
			component: Auth
		}
	]
})