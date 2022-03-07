import { createRouter, createWebHistory } from 'vue-router'

import RegisterPage from './components/pages/RegisterPage.vue'
import HomePage from './components/pages/HomePage.vue'
import LoginPage from './components/pages/LoginPage.vue'
import UserPage from './components/pages/UserPage.vue'
import MovieDetails from './components/pages/MovieDetails.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', component: HomePage },
		{ path: '/register', component: RegisterPage },
		{ path: '/login', component: LoginPage },
		{ path: '/userpage', component: UserPage },
		{ name: 'Movie Details', path: '/moviedetails', component: MovieDetails },
	],
})

export default router
