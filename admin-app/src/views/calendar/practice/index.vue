<template>
  <div>
    <div class="calendar__title">
      <h4>График занятий</h4>

      <div class="calendar__dates">
        <span class="calendar__day">Сегодня</span>

        <div class="calendar__date">20.05.2020</div>

        <button class="calendar__button"></button>
      </div>
    </div>

    <calendar-schedule msg="msg" />
  </div>
</template>

<script>
export default {
  name: 'Practice',
  components: {
    CalendarSchedule: () => import('@/components/CalendarSchedule.vue')
  }
  //   props: {
  //     calendar: {
  //       type: Object,
  //       required: true
  //     }
  //   }
}
</script>
