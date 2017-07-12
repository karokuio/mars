import Vue from 'vue'
import Router from 'vue-router'

import kkAdmin from '~/kkAdmin'
import kkNotFound from '~/kkNotFound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/admin',
      name: 'kkAdmin',
      component: kkAdmin
    },
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
