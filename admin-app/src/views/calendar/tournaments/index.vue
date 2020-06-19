<template>
  <section>
    <div class="calendar__grid">
      <calendar-card title="Мои турниры" add="свой турнир" />

      <div class="calendar__package">
        <h4>Стартовый комплект</h4>

        <package-card title="Акредитация для бизнеса" />
        <package-card title="Акредитация Волейбол" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Tournaments',
  components: {
    CalendarCard: () => import('@/components/CalendarCard'),
    PackageCard: () => import('@/components/PackageCard')
  }
  //   props: {
  //     calendar: {
  //       type: Object,
  //       required: true
  //     }
  //   }
}
</script>
