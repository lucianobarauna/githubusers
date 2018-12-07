import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

const load = component => () => import(`@/components/${component}.vue`)

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: 404,
      redirect: '/'
    },
    {
      path: '/',
      name: 'home',
      component: load('pages/GithubUsers')
    },
    {
      path: '/infouser/:id',
      name: 'infouser',
      component: load('pages/InfoUsers')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name === 'infouser' && (store.getters['githubusers/getIdGithubUser'] === undefined || store.getters['githubusers/getIdGithubUser'] === '')) {
    next('/')
    return
  }
  next()
})

export default router
