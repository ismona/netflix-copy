<template>
	<div class="details">
		<img v-if="this.details.poster_path" :src="`https://image.tmdb.org/t/p/w500${this.details.poster_path}`" width="200" />
		<h2>{{ this.details.title }}</h2>
		<blockquote v-if="this.details.tagline">"{{ this.details.tagline }}"</blockquote>
		<h3>Genres:</h3>
		<ul class="genres" v-for="genre in this.details.genres" :key="genre.id">
			<li>{{ genre.name }}</li>
		</ul>
		<p>{{ this.details.overview }}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			details: null,
			movieId: this.$route.params.id,
		}
	},
	async created() {
		const response = await fetch(`https://api.themoviedb.org/3/movie/${this.movieId}?api_key=abbe33bb41ca50f38625d8a205af0cfd&language=en-US`)
		const data = await response.json()
		this.details = data
		console.log(this.details)
		console.log(this.movieId)
	},
}
</script>

<style scoped>
.details {
	display: flex;
	max-width: 1200px;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100vh;
	margin: 0 auto;
	position: relative;
	z-index: 10;
	color: white;
}

ul {
	list-style-type: none;
	padding-left: 0;
}
</style>
