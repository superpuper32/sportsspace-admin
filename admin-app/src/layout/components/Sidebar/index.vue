<template>
  <aside class="sidebar">
    <h2 class="sidebar__title">SportsSpace</h2>

    <ul class="sidebar__nav">
      <router-link tag="li" to="/calendar" data-page="practice">
        <a>
          <i class="icon-practice"></i>
          <span>Календарь</span>
        </a>
      </router-link>

      <router-link tag="li" to="/tournaments" data-page="tournaments">
        <a>
          <i class="icon-tournaments"></i>
          <span>Турниры</span>
        </a>
      </router-link>

      <router-link tag="li" to="/teams" data-page="teams">
        <a>
          <i class="icon-teams"></i>
          <span>Команды</span>
        </a>
      </router-link>

      <router-link tag="li" to="/trainers" data-page="trainers">
        <a>
          <i class="icon-trainers"></i>
          <span>Тренера</span>
        </a>
      </router-link>

      <router-link tag="li" to="/playgrounds" data-page="playgrounds">
        <a>
          <i class="icon-playgrounds"></i>
          <span>Площадки</span>
        </a>
      </router-link>

      <router-link tag="li" to="/contacts" data-page="contacts">
        <a>
          <i class="icon-contacts"></i>
          <span>Контакты</span>
        </a>
      </router-link>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  computed: {
    routes() {
      return this.$router.options.routes
    }
  }
}
</script>
