import { login, logout } from '@/api/user'

const state = {
  token: localStorage.getItem('token') || '',
  user: JSON.parse(localStorage.getItem('user')) || null
}

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_USER(state, user) {
    state.user = user
  }
}

const actions = {
  async login({ commit }, credentials) {
    try {
      const { token, user } = await login(credentials)
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
      commit('SET_TOKEN', token)
      commit('SET_USER', user)
      return true
    } catch (error) {
      console.error('Login failed:', error)
      return false
    }
  },
  async logout({ commit }) {
    try {
      await logout()
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      commit('SET_TOKEN', '')
      commit('SET_USER', null)
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }
}

const getters = {
  isLoggedIn: state => !!state.token,
  currentUser: state => state.user
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}