<template>
  <section>
    <h2>Все Турниры</h2>

    <div v-if="!haveTournaments">...loading</div>

    <div class="profile__cards">
      <div v-for="tournament in filteredTours" v-bind:key="tournament.index">
        <dashboard-tournament-card v-bind:tournament="tournament" />
      </div>
    </div>

    <div v-if="haveTournaments" class="profile_pagination">
      <PagesPagination v-model.number="selectedPage" :per-page="toursPerPage" :total="totalTours" />
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Tournaments',
  components: {
    DashboardTournamentCard: () => import('@/components/DashboardTournamentCard'),
    PagesPagination: () => import('@/components/dashboard/PagesPagination.vue')
  },

  data: () => ({
    tournaments: [],
    toursPerPage: 6,
    selectedPage: 1,
    loading: false
  }),

  computed: {
    haveTournaments() {
      return this.tournaments.length > 0
    },

    totalTours() {
      return this.tournaments.length
    },

    filteredTours() {
      return this.tournaments.filter((item, index) => {
        const startIndex = (this.selectedPage - 1) * this.toursPerPage
        const endIndex = startIndex + this.toursPerPage

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
    this.loadTournaments()
  },

  methods: {
    loadTournaments() {
      axios
        .get('https://devtest.sportsspace.ru/api/v1/tournaments.json')
        .then(response => (this.tournaments = response.data.items))
        .catch(error => console.error(error))
    }
  }
}
</script>
