<template>
  <section>
    <div class="calendar__grid">
      <div>
        <div v-if="notification">
          <calendar-notification title="Вам одобрена аккредитация!" />
        </div>

        <calendar-card
          title="Мои площадки"
          add="свою площадку"
          to="/calendar/playgrounds/create-playground"
        >
          <div v-if="havePlaygrounds" class="calendar__cards">
            <div v-for="playground in playgrounds" :key="playground.index" class="calendar__card">
              <playground-card v-bind:playground="playground" />
            </div>
          </div>
        </calendar-card>
      </div>

      <div class="calendar__package">
        <h4>Стартовый комплект</h4>

        <package-card title="Акредитация для бизнеса" />
        <package-card title="Помочь с выбором площадки" />

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
  name: 'CalendarPlaygrounds',
  components: {
    PlaygroundCard: () => import('@/components/PlaygroundCard'),
    CalendarCard: () => import('@/components/CalendarCard'),
    PackageCard: () => import('@/components/PackageCard'),
    NoteCard: () => import('@/components/NoteCard'),
    CalendarNotification: () => import('@/components/CalendarNotification')
  },
  data: () => ({
    playgrounds: [],
    notification: false
  }),
  mounted() {
    this.loadPlaygrounds()
  },
  computed: {
    havePlaygrounds() {
      return this.playgrounds.length > 0
    }
  },
  methods: {
    loadPlaygrounds() {
      axios
        .get('http://localhost:3004/playgrounds')
        .then(response => (this.playgrounds = response.data))
        .catch(error => console.error(error))
    }
  }
}
</script>
