<template>
  <div class="home">
    <practice-schedule />
  </div>
</template>

<script>
import axios from 'axios'
import PracticeSchedule from '@/components/PracticeSchedule.vue'

export default {
  name: 'Home',
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
