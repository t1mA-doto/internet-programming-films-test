import { createRouter, createWebHistory } from 'vue-router'
import MovieView from '../views/MovieView.vue'
import MovieDetailView from '../views/MovieDetailView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/movies'
    },
    {
      path: '/movies',
      name: 'MoviesList',
      component: MovieView
    },
    {
      path: '/movie/:title',
      name: 'MovieDetail',
      component: MovieDetailView
    }
  ]
})

export default router
