<template>
  <!-- <aside class="sidebar">
    <h2 class="sidebar__title">
      <router-link to="/" data-page="dashboard">SportsSpace</router-link>
    </h2>

    <ul class="sidebar__nav">
      <router-link tag="li" to="/calendar" data-page="calendar">
        <a>
          <i class="icon-calendar"></i>
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
  </aside> -->
  <aside>
    <h2 class="sidebar__title">
      <router-link to="/" data-page="dashboard">SportsSpace</router-link>
    </h2>

    <div :class="{ 'has-logo': showLogo }">
      <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu
          :default-active="activeMenu"
          :collapse="isCollapse"
          :text-color="variables.menuText"
          :unique-opened="false"
          :active-text-color="variables.menuActiveText"
          :collapse-transition="false"
          mode="vertical"
        >
          <sidebar-item
            v-for="route in routes"
            :key="route.path"
            :item="route"
            :base-path="route.path"
          />
        </el-menu>
      </el-scrollbar>
    </div>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  name: 'Sidebar',
  components: { SidebarItem },
  computed: {
    ...mapGetters(['sidebar']),
    routes() {
      return this.$router.options.routes
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
