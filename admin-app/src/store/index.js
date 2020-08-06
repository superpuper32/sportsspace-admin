import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    teams: []
  },
  getters: {
    titleCount: state => state.title.length
  },
  mutations: {
    setTeams: (state, payload) => (state.teams = payload)
  },
  actions: {
    loadUsers({ commit }) {
      axios
        .get('http://localhost:3004/teams')
        .then(response => commit('setTeams', response.data))
        .catch(error => console.error(error))
    }
  }
})

export default store
