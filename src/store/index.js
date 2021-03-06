import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    loginflag: false,
    age: '30',
    bookes: [{ name: 'java', price: 64, flag: true },
      { name: 'python', price: 58, flag: true },
      { name: 'c#', price: 32, flag: false }]
  },
  getters: {
    // 调用getters中的方法
    donebooksCount: (state, getters) => {
      return `books：${getters.donebooks.length} 本符合条件`
    },
    donebooks (state) {
      return state.bookes.filter(book => book.flag)
    },
    donebooksByName: (state) => (name) => {
      return state.bookes.filter(book => book.name === name)
    }
  },
  mutations: {
    flag (state) {
      return state.loginflag
    },
    edit (state, payload) {
      console.log(payload)
      state.age = payload.age
      // state.token = 'jack'
    },
    login (state, payload) {
      state.loginflag = true
      state.token = payload.name
      // console.log(state.token)
    },
    logout (state) {
      state.loginflag = false
      state.token = ''
    },
    add (state) {
      state.age++
    },
    subtract (state) {
      state.age--
    }
  },
  actions: {
    addAction (context) {
      setTimeout(() => {
        context.commit('add')
      }, 2000)
    },
    subtractAction ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('subtract')
        }, 2000)
        resolve()
      })
    }
  },
  modules: {
    user
  }
})
