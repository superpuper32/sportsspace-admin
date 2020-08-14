import axios from 'axios'

const state = {
  profile: null
}

const mutations = {
  SET_PROFILE: (state, payload) => {
    state.profile = payload
  }
}

const actions = {
  async GET_PROFILE({ commit }) {
    await axios
      .get('https://devtest.sportsspace.ru/api/v1/current_user.json')
      .then(response => commit('SET_PROFILE', response.data.current_user))
      .catch(error => console.error(error))
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
