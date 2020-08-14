const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  profile: state => state.profile.profile,
  teams: state => state.profile.teams,
  tournaments: state => state.profile.tournaments
}
export default getters
