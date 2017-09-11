import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../components/Home.vue')
const Apod = () => import('../components/APOD.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: Home
  },
  {
    path: '/apod',
    name: 'apod',
    component: Apod
  }
]

const router = new VueRouter({
  routes
})

export default router
