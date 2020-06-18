<template>
  <section>
    <calendar-card title="Мои турниры" add="свой турнир" />
  </section>
</template>

<script>
export default {
  name: 'Tournaments',
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
