import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router.js'

const app = createApp(App)

const store = createStore({
	state() {
		return {
			userId: null,
			token: null,
			tokenExpiration: null,
		}
	},
	mutations: {
		setUser(state, payload) {
			state.token = payload.token
			state.userId = payload.userId
			state.tokenExpiration = payload.tokenExporation
		},
	},
	actions: {
		async login(context, payload) {
			const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyARisuDBqsHs2o_n8ZaE8GFrSk5yZFALfA', {
				method: 'POST',
				body: JSON.stringify({ email: payload.email, password: payload.password, returnSecureToken: true }),
			})
			const responseData = await response.json()
			if (!response.ok) {
				const error = new Error(responseData.massage || 'Failed to authenticate.')
				throw error
			} else {
				console.log(responseData)
				context.commit('setUser', {
					token: responseData.idToken,
					userId: responseData.localId,
					tokenExpiration: responseData.expiresIn,
				})
			}
		},
		async signup(context, payload) {
			const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyARisuDBqsHs2o_n8ZaE8GFrSk5yZFALfA', {
				method: 'POST',
				body: JSON.stringify({ email: payload.email, password: payload.password, returnSecureToken: true }),
			})
			const responseData = await response.json()
			if (!response.ok) {
				const error = new Error(responseData.massage || 'Failed to authenticate.')
				throw error
			} else {
				console.log(responseData)
				context.commit('setUser', {
					token: responseData.idToken,
					userId: responseData.localId,
					tokenExpiration: responseData.expiresIn,
				})
			}
		},
	},
	getters: {
		token(state) {
			return state.token
		}
	}
})

app.use(router)
app.use(store)

app.mount('#app')
