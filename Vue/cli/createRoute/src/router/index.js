import VueRouter from 'vue-router'
import Vue from 'vue'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'
//路由懒加载
const Home = () => import('../components/Home')
const HomeNew = () => import('../components/HomeNew')
const HomeMessage = () => import('../components/HomeMessage')

const About = () => import('../components/About')
const User = () => import('../components/User')
const ProFile = () => import('../components/ProFile')
const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,

    children:[
      // {
      //   path: '/',
      //   redirect:'new',
      // },
      {
        path: 'new',
        component: HomeNew
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    }
  },
  {
    path: '/user/:aaa',
    component: User,
    meta: {
      title: '用户'
    }
  },
  {
    path: '/profile',
    component: ProFile,
    meta: {
      title: '档案'
    }

  }
]

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
})


export default router
