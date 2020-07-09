<template>
  <section>
    <div class="calendar__grid">
      <div>
        <calendar-card title="Мои команды" add="свою команду" to="/calendar/teams/create-team">
          <div v-if="haveTeams" class="calendar__cards">
            <div v-for="team in teams" :key="team.index" class="calendar__card">
              <team-card v-bind:team="team" />
            </div>
          </div>
        </calendar-card>
      </div>

      <div class="calendar__package">
        <h4>Стартовый комплект</h4>

        <package-card title="Правила командных игр" />
        <package-card title="Помочь с выбором Тренера" />

        <h4>Заслуживающее внимания</h4>

        <note-card title="Игровая практика" />
        <note-card title="Найти себе команду" />
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Teams',
  components: {
    TeamCard: () => import('@/components/TeamCard'),
    CalendarCard: () => import('@/components/CalendarCard'),
    PackageCard: () => import('@/components/PackageCard'),
    NoteCard: () => import('@/components/NoteCard')
  },
  data: function() {
    return {
      teams: []
    }
  },
  mounted() {
    this.loadTeams()
  },
  computed: {
    haveTeams() {
      return this.teams.length > 0
    }
  },
  methods: {
    loadTeams() {
      axios
        .get('http://localhost:3004/teams')
        .then(response => (this.teams = response.data))
        .catch(error => console.error(error))
    }
  }
}
</script>
