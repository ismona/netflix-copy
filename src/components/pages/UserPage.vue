<template>
	<swiper
		:slides-per-view="1"
		:space-between="0"
		:autoplay="{
			delay: 2500,
			disableOnInteraction: false,
		}"
		:pagination="{
			clickable: true,
		}"
		:modules="modules"
	>
		<swiper-slide v-for="movie in movies" :key="movie.id"
			><div class="movie-content" @click="$router.push({
						name: 'Movie Details',
						params: { id: movie.id },
					})">
				<img v-if="movie.poster_path" :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" />
				<div class="movie-detail">
					<h2>{{ movie.original_title }}</h2>
					<p>{{ movie.overview }}</p>
				</div>
			</div>
		</swiper-slide>
	</swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

export default {
	data() {
		return {
			movies: null,
			randomMovies: null,
		}
	},
	components: {
		Swiper,
		SwiperSlide,
	},
	setup() {
		return {
			modules: [Autoplay],
		}
	},
	async created() {
		const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=abbe33bb41ca50f38625d8a205af0cfd&language=en-US&page=1')
		const data = await response.json()
		this.movies = data.results
		console.log(this.movies)

		this.randomMovies = this.movies.sort(function () {
			return 0.5 - Math.random()
		})
		this.randomMovies.length = 10
	},
}
</script>

<style scoped>
.swiper-slide {
	color: white;
}

.movie-content {
	display: flex;
	max-width: 1200px;
	justify-content: center;
	align-items: center;
	height: 100vh;
	margin: 0 auto;
	cursor: pointer;
}

.movie-content img {
	margin-right: 2rem;
}

.user-content {
	position: relative;
	z-index: 10;
}
</style>
