<template>
  <section>
    <div class="content-list__header">
      <div class="content-list__title">
        <h2>Список команд</h2>
        <p>
          Выбирайте команду для активного отдыха в отличной компании. Или создайте свою команду и
          участвуйте в турнирах
        </p>
      </div>

      <div class="content-list__search">
        <input type="search" aria-label="Search through teams cards" placeholder="Поиск" />
      </div>
    </div>

    <div v-if="!haveTeams">...loading</div>

    <div v-else class="profile__cards profile__cards_content-list">
      <div v-for="team in filteredTeams" v-bind:key="team.index">
        <dashboard-team-card v-bind:team="team" />
      </div>
    </div>

    <div v-if="haveTeams" class="profile_pagination">
      <PagesPagination v-model.number="selectedPage" :per-page="teamsPerPage" :total="totalTeams" />
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AllTeams',

  components: {
    DashboardTeamCard: () => import('@/components/DashboardTeamCard'),
    PagesPagination: () => import('@/components/dashboard/PagesPagination.vue')
  },

  data: () => ({
    teams: [],
    teamsPerPage: 7,
    selectedPage: 1,
    loading: false
  }),

  computed: {
    haveTeams() {
      return this.teams.length > 0
    },

    showPagination() {
      return this.teams.length > this.teamsPerPage
    },

    totalTeams() {
      return this.teams.length
    },

    filteredTeams() {
      return this.teams.filter((item, index) => {
        const startIndex = (this.selectedPage - 1) * this.teamsPerPage
        const endIndex = startIndex + this.teamsPerPage

        return startIndex <= index && index < endIndex
      })
    }
  },

  watch: {
    teamsPerPage() {
      this.selectedPage = 1
    }
  },

  mounted() {
    this.loadTeams()
  },

  methods: {
    loadTeams() {
      axios
        .get('https://devtest.sportsspace.ru/api/v1/commands.json')
        .then(response => (this.teams = response.data.items))
        .catch(error => console.error(error))
    }
  }
}
</script>

<style lang="sass">
.profile__cards_content-list
    margin-top: 2rem
</style>
