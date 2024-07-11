import { login, logout, getUserInfo } from '@/api/user'

const state = {
  token: localStorage.getItem('token') || '',
  username: '',
  role: ''
}

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_USERNAME(state, username) {
    state.username = username
  },
  SET_ROLE(state, role) {
    state.role = role
  }
}

const actions = {
  login({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      login(userInfo).then(response => {
        const { token } = response.data
        commit('SET_TOKEN', token)
        localStorage.setItem('token', token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      logout().then(() => {
        commit('SET_TOKEN', '')
        commit('SET_USERNAME', '')
        commit('SET_ROLE', '')
        localStorage.removeItem('token')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  getUserInfo({ commit }) {
    return new Promise((resolve, reject) => {
      getUserInfo().then(response => {
        const { username, role } = response.data
        commit('SET_USERNAME', username)
        commit('SET_ROLE', role)
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}