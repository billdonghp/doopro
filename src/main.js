import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
axios.defaults.baseURL = 'http://localhost/api/'
axios.defaults.withCredentials = true
Vue.prototype.$axios = axios

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 这里判断用户是否登录，验证本地存储是否有token
    if (localStorage.getItem('username')) {
      store.commit('login', { username: localStorage.getItem('username') })
    }
    if (!store.state.token && !store.state.loginflag) { // 判断当前的token是否存在
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
