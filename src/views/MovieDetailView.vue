<template>
  <div>
    <button @click="goBack" class="back-button">Назад к списку</button>

    <div v-if="movie" class="movie-detail">
      <h1>{{ movie.title }}</h1>
      <div class="movie-info">
        <p><strong>Год:</strong> {{ movie.year }}</p>
        <p><strong>Жанр:</strong> {{ movie.genre }}</p>
        <p><strong>Рейтинг:</strong> {{ movie.rating }}/10</p>
        <p><strong>Описание:</strong> {{ movie.description }}</p>
      </div>
    </div>

    <div v-else class="not-found">
      <h2>Фильм не найден</h2>
      <p>Извините, фильм с названием "{{ decodedTitle }}" не найден в нашей базе.</p>
      <button @click="goToMovies" class="back-button">Перейти к списку фильмов</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
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
    description:
      'Два заключенных находят дружбу и искупление в последующие годы. Экранизация повести Стивена Кинга.',
    rating: '9.3',
  },
  {
    id: 2,
    title: 'Крёстный отец',
    year: '1972',
    genre: 'Криминал',
    description:
      'Глава мафиозной семьи передает контроль своему неохотному сыну. Классическая гангстерская сага Фрэнсиса Форда Копполы.',
    rating: '9.2',
  },
  {
    id: 3,
    title: 'Тёмный рыцарь',
    year: '2008',
    genre: 'Боевик',
    description: 'Бэтмен сталкивается с Джокером - преступным гением, который сеет хаос в Готэме.',
    rating: '9.0',
  },
  {
    id: 4,
    title: 'Криминальное чтиво',
    year: '1994',
    genre: 'Криминал',
    description:
      'Переплетающиеся истории о насилии, искуплении и поп-культуре от Квентина Тарантино.',
    rating: '8.9',
  },
])

const movie = ref<Movie | null>(null)
const decodedTitle = computed(() => decodeURIComponent(route.params.title as string))

const findMovie = () => {
  const title = decodedTitle.value
  movie.value = movies.value.find((m) => m.title === title) || null
}

onMounted(() => {
  findMovie()
})

const goBack = () => {
  router.back()
}

const goToMovies = () => {
  router.push('/movies')
}
</script>

<style scoped>
.back-button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 20px;
  transition: background-color 0.3s;
}

.back-button:hover {
  background-color: #359268;
}

.movie-detail {
  background-color: white;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.movie-detail h1 {
  color: #42b983;
  margin-top: 0;
}

.movie-info p {
  margin: 15px 0;
  line-height: 1.6;
  color: #333;
}

.movie-info strong {
  color: #666;
  min-width: 80px;
  display: inline-block;
}

.not-found {
  text-align: center;
  padding: 50px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.not-found h2 {
  color: #e74c3c;
}

.not-found p {
  color: #666;
  margin: 20px 0;
}
</style>
