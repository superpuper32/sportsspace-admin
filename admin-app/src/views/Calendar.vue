<template>
  <div class="calendar">
    <div class="calendar__actions">
      <div class="actions__tasks">Сегодня</div>
      <div class="actions__date">20 Май 2020</div>
    </div>

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
      </div>
    </div>

    <practice-schedule msg="msg" />
    {{ practice.email }}
  </div>
</template>

<script>
import axios from 'axios'
import PracticeSchedule from '@/components/PracticeSchedule.vue'

export default {
  name: 'Calendar',
  components: {
    PracticeSchedule
  },
  data: function() {
    return {
      practice: []
    }
  },
  mounted() {
    this.loadPractice()
  },
  methods: {
    loadPractice() {
      axios
        .get('http://localhost:3004/practice/0')
        .then(response => (this.practice = response.data))
        .catch(error => console.error(error))
    }
  }
}
</script>
