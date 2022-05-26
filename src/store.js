import { createStore } from 'vuex'

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
			localStorage.setItem('token', state.token)
		},
		logout(state) {
			state.token = ''
			state.userId = ''
			state.tokenExpiration = ''
			localStorage.removeItem('token')
		}
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
		async logout(context) {
			context.commit('logout')
		},
	},
	getters: {
		isLoggedIn: (state) => !!state.token,
		token: (state) => state.token
	},
})

export default store