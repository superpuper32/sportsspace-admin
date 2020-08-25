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
      <div
        v-for="day in calendarDays"
        class="calendar__cell"
        :class="{ 'calendar__cell_inactive': !day.isActive }"
        :key="day.index"
      >{{ day.value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarSchedule',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  data: () => ({
    currentDate: new Date()
  }),
  computed: {
    total: function() {
      const count = 1
      return count
    },

    calendarDays() {
      return this.createCalendar(this.startOfMonth, this.countDays)
    },

    countDays() {
      return this.calcCountDays(this.currentDate)
    },

    startOfMonth() {
      return new Date(this.currentDate.getFullYear(), this.currentDate.getMonth()).getDay() || 7
    },

    userDate() {
      return this.currentDate.toLocaleDateString(navigator.language, {
        year: 'numeric',
        month: 'long'
      })
    }
  },

  methods: {
    calcCountDays(date) {
      return 32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate()
    },

    createCalendar(startOfMonth, countDays) {
      let calendar = []
      this.createLastMonthDays(calendar, startOfMonth)
      this.createCurrentMonthDays(calendar, countDays)
      this.createNextMonthDays(calendar)
      return calendar
    },

    createLastMonthDays(calendar, startOfMonth) {
      const lastMonth = new Date(this.currentDate)
      lastMonth.setMonth(this.currentDate.getMonth() - 1)
      let initValue = this.calcCountDays(lastMonth) - startOfMonth + 1
      for (let i = 1; i < startOfMonth; i++) {
        let day = {}
        day.isActive = false
        day.value = initValue + i
        calendar.push(day)
      }
    },

    createCurrentMonthDays(calendar, countDays) {
      for (let i = 1; i <= countDays; i++) {
        let day = {}
        day.value = i
        day.isActive = true
        if (i === new Date().getDate()) {
          day.isToday = true
        }
        calendar.push(day)
      }
    },

    createNextMonthDays(calendar) {
      let initValue = 1
      while (calendar.length % 7) {
        let day = {}
        day.isActive = false
        day.value = initValue
        calendar.push(day)
        initValue++
      }
    }
  }
}
</script>

<style scoped lang="scss">
.schedule {
  display: flex;
}
</style>
