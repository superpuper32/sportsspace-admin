<template>
  <div class="profile">
    <div class="profile__background">
      <span>Загрузить изображение</span>
    </div>

    <div class="profile__header">
      <div class="profile__info">
        <div>
          <div class="profile__avatar">
            <div class="profile__img">
              <img :src="profile.avatar" alt="avatar" />
            </div>
          </div>

          <div class="profile__name">{{ profile.name.first }} {{ profile.name.last }}</div>

          <div class="profile__position">{{ profile.role }}</div>

          <div class="profile__description">{{ profile.about }}</div>
        </div>

        <div class="profile__btns">
          <div class="profile__btn">1 Матч</div>

          <div class="profile__btn">1 Матч</div>
        </div>
      </div>

      <div class="profile__payment">
        <div class="profile__score">
          <span>{{ profile.balance }} ₽</span>
        </div>

        <div class="profile__social">
          <ul class="profile__links">
            <li data-social="google">
              <a href="#" class="social-google"></a>
            </li>
            <li data-social="instagram">
              <a href="#" class="social-instagram"></a>
            </li>
            <li data-social="facebook">
              <a href="#" class="social-facebook"></a>
            </li>
            <li data-social="new">
              <a href="#" class="social-new"></a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <h5>Турниры</h5>

    <div class="profile__cards">
      <div v-for="tournament in tournaments" v-bind:key="tournament.index">
        <dashboard-tournament-card :tournament="tournament" />
      </div>
    </div>

    <h5>Команды</h5>

    <div class="profile__cards">
      <div v-for="team in teams" v-bind:key="team.index">
        <dashboard-team-card :team="team" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  components: {
    DashboardTournamentCard: () => import('@/components/DashboardTournamentCard'),
    DashboardTeamCard: () => import('@/components/DashboardTeamCard')
  },
  props: {
    profile: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    tournaments: [],
    teams: []
  }),
  mounted() {
    this.loadData()
    // this.tournaments = this.profile.tournaments
    // this.teams = this.profile.teams
  },
  methods: {
    loadData() {
      this.tournaments = this.profile.tournaments
      this.teams = this.profile.teams
    }
  }
}
</script>

<style lang="sass" scoped>
.profile

  &__cards
    margin-bottom: 30px

  h5
    margin-bottom: 24px
</style>
