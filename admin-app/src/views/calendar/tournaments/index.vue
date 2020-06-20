<template>
  <section>
    <div class="calendar__grid">
      <calendar-card title="Мои турниры" add="свой турнир" />

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
export default {
  name: 'Tournaments',
  components: {
    CalendarCard: () => import('@/components/CalendarCard'),
    PackageCard: () => import('@/components/PackageCard'),
    NoteCard: () => import('@/components/NoteCard')
  }
  //   props: {
  //     calendar: {
  //       type: Object,
  //       required: true
  //     }
  //   }
}
</script>
