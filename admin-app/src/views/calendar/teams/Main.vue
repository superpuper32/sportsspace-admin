<template>
  <section>
    <calendar-card title="Мои команды" add="свою команду" to="create-team" />
  </section>
</template>

<script>
export default {
  name: 'Teams',
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
