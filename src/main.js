import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
axios.defaults.baseURL = 'http://newdoopro.doosaninfracore.cn:8080/doopro/'
Vue.prototype.$axios = axios

router.beforeEach((to, from, next) => {
  // if (to.path === '/about') {
  //   next()
  // } else if (to.path === '/main') {
  //   next()
  // } else if (to.path === '/info') {
  //   next()
  // } else if (to.path === '/') {
  //   next()
  // } else {
  //   next({ path: '/' })
  // }
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 这里判断用户是否登录，验证本地存储是否有token
    console.log(`token: ${store.state.token} flge: ${store.state.loginflag}`)
    if (!store.state.token && !store.state.loginflag) { // 判断当前的token是否存在
      // next({
      //   path: '/login'
      // })
      if (to.path === '/') {
        next()
      } else {
        next({ path: '/' })
      }
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
