import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/aeropuertos',
      name: 'aeropuertos',
      component: () => import('@/views/AirportsView.vue')
    },
    {
      path: '/vuelos',
      name: 'vuelos',
      component: () => import('@/views/FlightsView.vue')
    },
    {
      path: '/analiticas',
      name: 'analiticas',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
