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
    component: () => import('@/views/Teams.vue'),
    meta: { requiresAuth: true }
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

const token = '123'

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (token !== '123') {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
