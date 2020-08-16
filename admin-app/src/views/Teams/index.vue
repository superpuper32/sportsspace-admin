<template>
  <section>
    <h2>Команды</h2>

    <div v-if="!haveTeams">...loading</div>

    <div v-else class="profile__cards">
      <div v-for="team in filteredTeams" v-bind:key="team.index">
        <dashboard-team-card v-bind:team="team" />
      </div>
    </div>

    <div class="profile_pagination">
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
    teamsPerPage: 8,
    selectedPage: 1,
    loading: false
  }),
  computed: {
    haveTeams() {
      return this.teams.length > 0
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
    rowsPerPage() {
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
