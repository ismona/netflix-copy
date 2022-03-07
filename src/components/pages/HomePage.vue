<template>
	<div class="cover-content">
		<h1>Unlimited movies, TV show, and more.</h1>
		<h2>Watch anywhere. Cancel anytime.</h2>
		<h3>Ready to watch? Enter your email to create or restart your membership.</h3>
		<router-link to="/register" class="sign-button">Sign in</router-link>
	</div>
</template>

<style scoped>
.cover-content {
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

h1 {
	margin: 0;
	font-size: 4rem;
	max-width: 800px;
}

.sign-button {
	background: #e50914;
	color: #fff;
	outline: none;
	border: none;
	padding: 0.5rem 1rem;
	font-size: 1.5rem;
}
a {
	text-decoration: none;
}
</style>
