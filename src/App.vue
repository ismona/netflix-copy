<template>
	<router-view></router-view>
	<div class="gradient"></div>
</template>

<script>
export default {
	name: 'App',
	components: {},
}
</script>

<style>
body {
	padding: 0;
	margin: 0;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background-image: url('./assets/images/netflix-bg.jpg');
	height: 100vh;
}
.gradient {
	background: linear-gradient(to top, rgb(0 0 0 / 95%) 0, rgb(0 0 0 / 46%) 60%, rgb(0 0 0 / 83%) 100%);
	position: absolute;
	width: 100vw;
	height: 100vh;
	top: 0;
}
</style>
