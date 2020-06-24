<template>
  <section>
    <calendar-card title="Мои площадки" add="свою площадку" to="/calendar/teams/create-team" />
  </section>
</template>

<script>
export default {
  name: 'Playgrounds',
  components: {
    CalendarCard: () => import('@/components/CalendarCard')
  }
  //   props: {
  //     calendar: {
  //       type: Object,
  //       required: true
  //     }
  //   }
}
</script>
