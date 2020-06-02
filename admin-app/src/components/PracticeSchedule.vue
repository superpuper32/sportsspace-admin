<template>
  <div class="calendar__schedule">
    <div class="calendar__day-of-week">
      <div>Понедельник</div>
      <div>Вторник</div>
      <div>Среда</div>
      <div>Четверг</div>
      <div>Пятница</div>
      <div>Суббота</div>
      <div>Воскресенье</div>
    </div>

    <div class="calendar__date-grid">
      <button class="calendar__cell">1</button>
      <button class="calendar__cell">2</button>
      <button class="calendar__cell">3</button>
      <button class="calendar__cell">4</button>
      <button class="calendar__cell">5</button>
      <button class="calendar__cell">6</button>
      <button class="calendar__cell">7</button>
      <button class="calendar__cell">8</button>
      <button class="calendar__cell">9</button>
      <button class="calendar__cell">10</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PracticeSchedule',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  computed: {
    total: function() {
      const count = 1
      return count
    }
  }
}
</script>

<style scoped lang="scss">
.schedule {
  display: flex;
}
</style>
