<template>
  <div class="calendar">
    <div class="calendar__actions">
      <div class="actions__tasks">Сегодня</div>
      <div class="actions__date">20 Май 2020</div>
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
