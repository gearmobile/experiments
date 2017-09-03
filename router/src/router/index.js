import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Error from '@/components/Error'
import User from '@/components/user/user'
import listUsers from '@/components/user/userList'
import userDetail from '@/components/user/userDetail'
import userEdit from '@/components/user/userEdit'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/error',
      name: 'Error',
      component: Error
    },
    {
      path: '/user',
      component: User,
      children: [
        {
          path: '',
          name: 'listUsers',
          component: listUsers
        },
        {
          path: ':userID',
          name: 'userDetail',
          component: userDetail,
          beforeEnter: (to, from, next) => {
            console.log('local beforeEnter')
            next()
          }
        },
        {
          path: ':userID/edit',
          name: 'userEdit',
          component: userEdit
        }
      ]
    },
    {
      path: '/about', // absolute redirect
      redirect: '/'
    },
    {
      path: '*',
      component: Error
    }
  ]
})

// global hook
router.beforeEach((to, from, next) => {
  console.log('global beforeEach')
  next()
})

export default router
