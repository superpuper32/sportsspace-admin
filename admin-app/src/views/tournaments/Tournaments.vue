<template>
  <section>
    <div class="content-list__header">
      <div class="content-list__title">
        <h2>Список турниров</h2>
        <p>
          Выбирайте турнир для активного отдыха в отличной компании. Или пройдите аккредитацию,
          создайте свой турнир и участвуйте в играх
        </p>
      </div>

      <div class="content-list__search">
        <input type="search" aria-label="Search through teams cards" placeholder="Поиск" />
      </div>
    </div>

    <div v-if="!haveTournaments">...loading</div>

    <div class="profile__cards profile__cards_content-list">
      <div v-for="tournament in filteredTours" v-bind:key="tournament.index">
        <dashboard-tournament-card v-bind:tournament="tournament" />
      </div>
    </div>

    <div v-if="showPagination" class="profile_pagination">
      <PagesPagination v-model.number="selectedPage" :per-page="toursPerPage" :total="totalTours" />
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AllTournaments',
  components: {
    DashboardTournamentCard: () => import('@/components/dashboard/DashboardTournamentCard.vue'),
    PagesPagination: () => import('@/components/dashboard/PagesPagination.vue')
  },

  data: () => ({
    tournaments: [],
    toursPerPage: 7,
    selectedPage: 1,
    loading: false
  }),

  computed: {
    haveTournaments() {
      return this.tournaments.length > 0
    },

    showPagination() {
      return this.tournaments.length > this.toursPerPage
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
