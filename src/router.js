import Vue from 'vue'
import Router from 'vue-router'

const load = component => () => import(`@/components/${component}.vue`)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: load('pages/GithubUsers')
    },
    {
      path: '/infouser',
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
