import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './views/Inicio.vue'
import Historia from './views/Historia.vue'
import Equipos from './views/Equipos.vue'
import Participantes from './views/Participantes.vue'
import Disciplinas from './views/Disciplinas.vue'

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
      path: '/equipos',
      name: 'equipos',
      component: Equipos
    },
    {
      path: '/participantes',
      name: 'participantes',
      component: Participantes
    },
    {
      path: '/historia',
      name: 'historia',
      component: Historia
    },
    {
      path: '/disciplinas',
      name: 'disciplinas',
      component: Disciplinas
    }
  ]
})
