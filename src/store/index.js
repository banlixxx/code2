import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/modules/user.js'
import cart from '@/store/modules/cart.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {
    token(state) {
      return state.user.userInfo.token
    }
  },
  mutations: {},
  actions: {},
  modules: {
    user,
    cart
  }
})
