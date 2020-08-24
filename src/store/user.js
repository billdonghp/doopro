const state = {
  username: '董海朋',
  token: '123456',
  userStatus: '',
  userLevel: ''
}
const mutations = {
  setMemberInfo (state, payload) {
    state.userStatus = payload.userStatus
    state.userLevel = payload.userLevel
  }
}
const getters = {
  getToken (state) {
    return state.token
  },
  getUserInfo (state, getters, rootState) {
    return `name: ${rootState.token} `
  },
  getMemberInfo (state) {
    switch (state.userStatus) {
      case 0:
        return '普通'
        // break
      case 1:
        return '高级'
        // break
      case 2:
        return `VIP${state.userLevel}`
        // break
      default:
        return '游客'
        // break
    }
  }
}
const actions = {
}
export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
