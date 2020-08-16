<template>
  <section>
    <h2>Все Площадки</h2>

    <div v-if="!havePlaygrounds">...loading</div>

    <div class="profile__cards">
      <div v-for="playground in filteredPlaygrounds" v-bind:key="playground.index">
        <dashboard-playground-card v-bind:playground="playground" />
      </div>
    </div>

    <div v-if="havePlaygrounds" class="profile_pagination">
      <PagesPagination
        v-model.number="selectedPage"
        :per-page="playgroundsPerPage"
        :total="totalPlaygrounds"
      />
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Playgrounds',
  components: {
    DashboardPlaygroundCard: () => import('@/components/DashboardPlaygroundCard'),
    PagesPagination: () => import('@/components/dashboard/PagesPagination.vue')
  },
  data: () => ({
    playgrounds: [],
    playgroundsPerPage: 8,
    selectedPage: 1,
    loading: false
  }),
  computed: {
    havePlaygrounds() {
      return this.playgrounds.length > 0
    },

    totalPlaygrounds() {
      return this.playgrounds.length
    },

    filteredPlaygrounds() {
      return this.playgrounds.filter((item, index) => {
        const startIndex = (this.selectedPage - 1) * this.playgroundsPerPage
        const endIndex = startIndex + this.playgroundsPerPage

        return startIndex <= index && index < endIndex
      })
    }
  },
  mounted() {
    this.loadPlaygrounds()
  },
  methods: {
    loadPlaygrounds() {
      axios
        .get('https://devtest.sportsspace.ru/api/v1/playgrounds.json')
        .then(response => (this.playgrounds = response.data.items))
        .catch(error => console.error(error))
    }
  }
}
</script>
