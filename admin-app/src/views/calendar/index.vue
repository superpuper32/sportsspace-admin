<template>
  <section class="calendar">
    <nav class="calendar__nav">
      <ul>
        <router-link tag="li" to="/calendar/practice" data-page="/calendar/practice">
          <a>Занятия</a>
        </router-link>

        <router-link tag="li" to="/calendar/teams" data-page="/calendar/teams">
          <a>Команды</a>
        </router-link>

        <router-link tag="li" to="/calendar/tournaments" data-page="/calendar/tournaments">
          <a>Турниры</a>
        </router-link>

        <router-link tag="li" to="/calendar/playgrounds" data-page="/calendar/playgrounds">
          <a>Площадки</a>
        </router-link>
      </ul>
    </nav>

    <section class="calendar__content">
      <router-view :key="key" />
    </section>
  </section>
</template>

<script>
import axios from 'axios'
// 如果想要中文版 element-ui，按如下方式声明

export default {
  name: 'Calendar',
  data: function() {
    return {
      practice: []
    }
  },
  mounted() {
    this.loadPractice()
  },
  computed: {
    key() {
      return this.$route.path
    }
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
