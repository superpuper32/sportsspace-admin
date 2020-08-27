<template>
  <section>
    <div class="calendar__grid">
      <calendar-card
        title="Мои турниры"
        add="свой турнир"
        to="/calendar/tournaments/create-tournament"
      >
        <div v-if="haveTournaments" class="calendar__cards">
          <div
            v-for="tournament in tournaments"
            :key="tournament.index"
            class="calendar__tournament"
          >
            <tournament-card v-bind:tournament="tournament" />
          </div>
        </div>
      </calendar-card>

      <div class="calendar__package">
        <h4>Стартовый комплект</h4>

        <package-card title="Акредитация для бизнеса" />
        <package-card title="Помочь с выбором турнира" />

        <h4>Заслуживающее внимания</h4>

        <note-card title="Игровая практика" />
        <note-card title="Найти себе команду" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CalendarTournaments',
  components: {
    TournamentCard: () => import('@/components/calendar/tournaments/TournamentCard.vue'),
    CalendarCard: () => import('@/components/CalendarCard'),
    PackageCard: () => import('@/components/PackageCard'),
    NoteCard: () => import('@/components/NoteCard')
  },
  mounted() {
    this.$store.dispatch('profile/GET_TOURNAMENTS')
  },
  computed: {
    ...mapGetters(['tournaments']),
    haveTournaments() {
      return this.tournaments.length > 0
    }
  }
}
</script>
