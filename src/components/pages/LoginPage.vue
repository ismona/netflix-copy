<template>
	<div class="register-content">
		<div class="card">
			<h1>Log In</h1>
			<form @submit.prevent="submitForm">
				<input type="text" placeholder="email" id="email" v-model.trim="email" />

				<input type="password" placeholder="password" id="password" v-model.trim="password" />
				<button>Log In</button>
				<p v-if="!formIsValid">Please enter a valid email and password.</p>
			</form>
			<router-link to="/register" class="link">Don't have an account? Sign Up.</router-link>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			email: '',
			password: '',
			formIsValid: true,
		}
	},
	methods: {
		submitForm() {
			this.formIsValid = true
			this.$store
				.dispatch('login', { email: this.email, password: this.password })
				.then(() => this.$router.push({ path: '/userpage' }))
				.catch((error) => {
					console.log(error)
					this.formIsValid = false
				})
		},
	},
}
</script>

<style scoped>
.register-content {
	position: relative;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100vh;
	text-align: center;
	z-index: 10;
}

.form {
	display: flex;
	flex-direction: column;
}

input {
	display: block;
	background: #333;
	border: none;
	outline: none;
	height: 50px;
	width: 100%;
	margin-bottom: 1rem;
	border-radius: 5px;
	padding: 0.3rem 1rem;
	font-size: 1rem;
	box-sizing: border-box;
	color: white;
}

button {
	background: #e50914;
	color: #fff;
	outline: none;
	border: none;
	padding: 0.5rem 1rem;
	font-size: 1.5rem;
	border-radius: 5px;
	width: 100%;
	margin-bottom: 1rem;
	cursor: pointer;
}

.card {
	width: 300px;
	background-color: rgba(0, 0, 0, 0.75);
	padding: 60px 68px 40px;
}

.link {
	color: #fff;
}
</style>
