import Vue from 'vue'
import Router from 'vue-router'

import kkNotFound from '@/layouts/kkNotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component:
    // },
    {
      path: '/not-found',
      name: '404',
      component: kkNotFound
    },
    {
      path: '*',
      redirect: { name: '404' }
    }
  ]
})
