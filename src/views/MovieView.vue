<template>
  <div>
    <h1>Список фильмов</h1>
    <div class="search-box">
      <input
        v-model="searchQuery"
        @input="filterMovies"
        placeholder="Поиск фильмов по названию..."
        type="text"
      />
    </div>
    <div class="movies-grid">
      <div
        v-for="movie in filteredMovies"
        :key="movie.id"
        class="movie-card"
        @click="goToMovie(movie.title)"
      >
        <h3>{{ movie.title }}</h3>
        <p>{{ movie.year }}</p>
        <p class="genre">{{ movie.genre }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

interface Movie {
  id: number
  title: string
  year: string
  genre: string
  description: string
  rating: string
}

const movies = ref<Movie[]>([
  {
    id: 1,
    title: 'Побег из Шоушенка',
    year: '1994',
    genre: 'Драма',
    description: 'Два заключенных находят дружбу и искупление в последующие годы.',
    rating: '9.3'
  },
  {
    id: 2,
    title: 'Крёстный отец',
    year: '1972',
    genre: 'Криминал',
    description: 'Глава мафиозной семьи передает контроль своему неохотному сыну.',
    rating: '9.2'
  },
  {
    id: 3,
    title: 'Тёмный рыцарь',
    year: '2008',
    genre: 'Боевик',
    description: 'Бэтмен сталкивается с Джокером - преступным гением.',
    rating: '9.0'
  },
  {
    id: 4,
    title: 'Криминальное чтиво',
    year: '1994',
    genre: 'Криминал',
    description: 'Переплетающиеся истории о насилии, искуплении и поп-культуре.',
    rating: '8.9'
  }
])

const searchQuery = ref('')

const filteredMovies = computed(() => {
  if (!searchQuery.value) return movies.value
  return movies.value.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const filterMovies = () => {
}

const goToMovie = (title: string) => {
  router.push(`/movie/${encodeURIComponent(title)}`)
}
</script>

<style scoped>
h1 {
  color: #333;
  text-align: center;
}

.search-box {
  margin-bottom: 20px;
  text-align: center;
}

.search-box input {
  width: 100%;
  max-width: 400px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.movies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.movie-card {
  background-color: white;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.movie-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.movie-card h3 {
  margin: 0 0 10px 0;
  color: #42b983;
}

.movie-card p {
  margin: 5px 0;
  color: #666;
}

.genre {
  color: #999;
  font-size: 14px;
}
</style>
