<template>
  <div>
    <div class="calendar__title">
      <h4>График занятий</h4>

      <div class="calendar__dates">
        <span class="calendar__day">Сегодня</span>

        <div class="calendar__date">{{ today }}</div>

        <button class="calendar__button"></button>
      </div>
    </div>

    <calendar-schedule msg="msg" />

    <calendar-card title="Мои занятия" add="свое занятие" to="/calendar/teams/create-team" />

    <calendar-card title="Мои тренировки" add="свое занятие" to="/calendar/teams/create-team" />
  </div>
</template>

<script>
export default {
  name: 'Practice',
  components: {
    CalendarSchedule: () => import('@/components/CalendarSchedule.vue'),
    CalendarCard: () => import('@/components/CalendarCard')
  },
  computed: {
    today() {
      const day = new Date()

      let d = day.getDate()
      let m = day.getMonth() + 1
      const y = day.getFullYear()

      if (d < 10) d = '0' + d
      if (m < 10) m = '0' + m

      return `${d}.${m}.${y}`
    }
  }
}
</script>
