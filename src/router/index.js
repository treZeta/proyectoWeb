import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'backoffice' }
    },
    {
      path: '/backoffice',
      name: 'backoffice',
      component: import('@/views/BackOfficeView.vue'),
      redirect: { name: 'backoffice/aeropuertos/lista' },
      children: [
        {
          path: '/backoffice/aeropuertos',
          name: 'backoffice/aeropuertos',
          component: () => import('@/views/AirportsView.vue'),
          redirect: { name: 'backoffice/aeropuertos/lista' },
          children: [
            {
              path: '/backoffice/aeropuertos/lista',
              name: 'backoffice/aeropuertos/lista',
              component: import('../components/airports/AirportsListComponent.vue'),
            },
            {
              path: '/backoffice/aeropuertos/crear',
              name: 'backoffice/aeropuertos/crear',
              component: import('../components/airports/CrudAirportComponent.vue')
            },
            {
              path: '/backoffice/aeropuertos/editar',
              name: 'backoffice/aeropuertos/editar/:id',
              component: import('../components/airports/CrudAirportComponent.vue')
            }
          ]
        },
        {
          path: '/backoffice/vuelos',
          name: 'backoffice/vuelos',
          redirect: { name: 'backoffice/vuelos/lista' },
          component: () => import('@/views/FlightsView.vue'),
          children: [
            {
              path: '/backoffice/vuelos/lista',
              name: 'backoffice/vuelos/lista',
              component: () => import('@/components/flights/FlightsListComponent.vue')
            }
          ]
        },
        {
          path: '/backoffice/analiticas',
          name: 'backoffice/analiticas',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/AboutView.vue')
        },
        {
          path: '/backoffice/flota',
          name: 'backoffice/flota',
          children: [
            {
              path: '/backoffice/flota/aviones',
              name: 'backoffice/flota/aviones',
              component: import('../views/PlanesView.vue'),
              redirect: { name: 'backoffice/flota/aviones/lista' },
              children: [
                {
                  path: '/backoffice/flota/aviones/lista',
                  name: 'backoffice/flota/aviones/lista',
                  component: import('../components/planes/PlanesListComponent.vue')
                },
                {
                  path: '/backoffice/flota/aviones/crear',
                  name: 'backoffice/flota/aviones/crear',
                  component: import('../components/planes/CrudPlaneComponent.vue')
                },
                {
                  path: '/backoffice/flota/aviones/crear',
                  name: 'backoffice/flota/aviones/editar/:id',
                  component: import('../components/planes/CrudPlaneComponent.vue')
                }
              ]
            },
            {
              path: '/backoffice/flota/modelos',
              name: 'backoffice/flota/modelos',
              component: import('../views/PlanesModelsView.vue'),
              redirect: { name: 'backoffice/flota/modelos/lista' },
              children: [
                {
                  path: '/backoffice/flota/modelos/lista',
                  name: 'backoffice/flota/modelos/lista',
                  component: import('../components/planesModels/PlanesModelsListComponent.vue')
                },
                {
                  path: '/backoffice/flota/modelos/crear',
                  name: 'backoffice/flota/modelos/crear',
                  component: import('../components/planesModels/CrudPlaneModelComponent.vue')
                },
                {
                  path: '/backoffice/flota/modelos/editar/:id',
                  name: 'backoffice/flota/modelos/editar',
                  component: import('../components/planesModels/CrudPlaneModelComponent.vue')
                }
              ]
            }
          ]
        }
      ]
    },
  ]
})

export default router
