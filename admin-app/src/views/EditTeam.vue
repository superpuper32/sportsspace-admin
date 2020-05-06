<template>
  <div>
    Редактировать команду - {{ id }}
    <div class="alert alert-warning" v-if="!team">Загрузка данных ...</div>
    <team-form v-else :team="team" />
  </div>
</template>

<script>
import axios from 'axios'
import TeamForm from '@/components/TeamForm.vue'

export default {
  name: 'EditTeamPage',
  components: {
    TeamForm
  },
  data: function() {
    return {
      team: null
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    }
  },
  mounted() {
    this.loadTeam()
  },
  methods: {
    loadTeam() {
      axios
        .get('http://localhost:3004/teams/' + this.id)
        .then(response => (this.team = response.data))
        .catch(error => console.error(error))
    }
  }
}
</script>
