import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './views/Inicio.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/equipos',
      name: 'equipos',
      component: () => import(/* webpackChunkName: "about" */ './views/Equipos.vue')
    },
    {
      path: '/participantes',
      name: 'participantes',
      component: () => import(/* webpackChunkName: "about" */ './views/Participantes.vue')
    },
    {
      path: '/historia',
      name: 'historia',
      component: () => import(/* webpackChunkName: "about" */ './views/Historia.vue')
    },
    {
      path: '/disciplinas',
      name: 'disciplinas',
      component: () => import(/* webpackChunkName: "about" */ './views/Disciplinas.vue')
    }
  ]
})
