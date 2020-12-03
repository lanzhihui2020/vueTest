import VueRouter from 'vue-router'

import  Vue from 'vue'

import Home from '../components/Home'
import About from '../components/About'

const routes = [
  {
    path: '/Home',
    component: Home
  },
  {
    path: '/About',
    component: About
  }
]

Vue.use(VueRouter)
const router = new VueRouter({
  routes
})
export default router
