import axios from 'axios'

const state = {
  profile: null,
  teams: [],
  tournaments: []
}

const mutations = {
  SET_PROFILE: (state, payload) => {
    state.profile = payload
  },
  SET_TEAMS: (state, payload) => {
    state.teams = payload
  },
  SET_TOURNAMENTS: (state, payload) => {
    state.tournaments = payload
  }
}

const actions = {
  async GET_PROFILE({ commit }) {
    await axios
      .get('https://devtest.sportsspace.ru/api/v1/current_user.json')
      .then(response => commit('SET_PROFILE', response.data.current_user))
      .catch(error => console.error(error))
  },
  async GET_TEAMS({ commit }) {
    await axios
      .get('https://devtest.sportsspace.ru/api/v1/current_user.json')
      .then(response => commit('SET_TEAMS', response.data.i_cap_teams))
      .catch(error => console.error(error))
  },
  async GET_TOURNAMENTS({ commit }) {
    await axios
      .get('https://devtest.sportsspace.ru/api/v1/current_user.json')
      .then(response => commit('SET_TOURNAMENTS', response.data.i_cap_tournaments))
      .catch(error => console.error(error))
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
