import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

const state = {
  test: 'testValue'

}
const mutations = {
  testFn(state, payload) {
    state.test = payload
  }

}
const getters = {

}
const actions = {

}
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

export default store