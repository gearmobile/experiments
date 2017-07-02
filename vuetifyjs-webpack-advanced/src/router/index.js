import Vue from 'vue'
import Router from 'vue-router'
import Grid from '@/components/grid'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Grid',
      component: Grid
    }
  ]
})
