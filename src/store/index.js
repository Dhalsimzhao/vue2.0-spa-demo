import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var
const store = new Vuex.store({
  state: {
    userInfo: {}
  },
  getters: {
    getUserInfo(state) {
      return state.userInfo;
    }
  },
  mutations: {
    userInfo(state, userInfo) {
      state.userInfo = userInfo;
    }
  },
  actions: {
    setUserInfo({commit}, userInfo) {
      commit('userInfo', userInfo);
    }
  }
})

export default store;