import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { requiresAuth: true },
    children: [
      {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }, {
        path: '/info',
        name: 'info',
        component: () => import(/* webpackChunkName: "info" */ '../views/Info.vue')
      }, {
        path: '/user',
        name: 'user',
        props: true,
        component: () => import(/* webpackChunkName: "user" */ '../views/User.vue')
      }, {
        path: '/lesson',
        name: 'lesson',
        props: true,
        component: () => import(/* webpackChunkName: "user" */ '../views/Lesson.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/main',
    name: 'main',
    meta: { requiresAuth: true }, // 添加表示需要验证
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "main" */ '../views/Main.vue')// ,
    // children: [
    //   {
    //     path: '/about',
    //     name: 'About',
    //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    //   }, {
    //     path: '/info',
    //     name: 'Info',
    //     component: () => import(/* webpackChunkName: "info" */ '../views/Info.vue')
    //   }
    // ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
