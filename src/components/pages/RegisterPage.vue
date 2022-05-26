<template>
	<div class="register-content">
		<div class="card">
			<h1>Sign In</h1>
			<form @submit.prevent="submitForm">
				<input type="text" placeholder="email" id="email" v-model.trim="email" />

				<input type="password" placeholder="password" id="password" v-model.trim="password" />
				<button>Sign In</button>
				<p v-if="!formIsValid">Please enter a valid email and password must be at least 6 characters long.</p>
			</form>
			<router-link to="/login" class="link">Already has an account? Log in.</router-link>
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
			if (this.email === '' || !this.email.includes('@') || this.password.length < 6) {
				this.formIsValid = false
				return
			} else {
				this.$store.dispatch('signup', { email: this.email, password: this.password })
				this.$router.push({ path: '/userpage' })
			}
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
