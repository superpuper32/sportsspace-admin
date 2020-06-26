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
// 如果想要中文版 element-ui，按如下方式声明

export default {
  name: 'Calendar',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>
