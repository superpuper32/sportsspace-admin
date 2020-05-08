import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/teams',
    name: 'Teams',
    component: () => import('@/views/Teams.vue')
  },
  {
    path: '/tournaments',
    name: 'Tournaments',
    component: () => import('@/views/Tournaments.vue')
  },
  {
    path: '/playgrounds',
    name: 'Playgrounds',
    component: () => import('@/views/Playgrounds.vue')
  },
  {
    path: '/edit/:id',
    name: 'EditTeam',
    component: () => import('@/views/EditTeam.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
