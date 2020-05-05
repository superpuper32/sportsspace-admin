import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Teams from '@/views/Teams.vue'
import Tournaments from '@/views/Tournaments.vue'
import Playgrounds from '@/views/Playgrounds.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/teams',
    name: 'Teams',
    component: Teams
  },
  {
    path: '/tournaments',
    name: 'Tournaments',
    component: Tournaments
  },
  {
    path: '/playgrounds',
    name: 'Playgrounds',
    component: Playgrounds
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
