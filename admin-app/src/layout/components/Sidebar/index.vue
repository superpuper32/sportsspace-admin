<template>
  <aside>
    <div class="sidebar__title">
      <router-link to="/" :class="sidebarLogo"></router-link>
    </div>

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
    },
    sidebarLogo() {
      if (this.sidebar.opened) {
        return 'sidebar__title_opened'
      }
      return 'sidebar__title_closed'
    }
  }
}
</script>
