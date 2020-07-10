<template>
  <div class="settings">
    <aside class="settings__aside">
      <!-- <nav-settings /> -->
      <nav class="settings__nav">
        <ul>
          <li v-for="tab in tabs" v-bind:key="tab.name" v-on:click="currentTab = tab">
            <a class="settings__link settings__link_active">
              <i class="icon-main"></i>
              <span class="settings__title">{{ tab.name }}</span>
              <span class="settings__description">Профиль фото, имя, язык</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>

    <section class="settings__content">
      <!-- <router-view :key="key" v-bind:settings="settings" /> -->
      <component :is="currentTab.component"></component>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

var tabs = [
  {
    name: 'Home',
    component: () => import('@/views/settings/main/index.vue')
  },
  {
    name: 'Social',
    component: () => import('@/views/settings/social/index.vue')
  }
]

export default {
  name: 'Settings',
  components: {
    NavSettings: () => import('@/components/NavSettings')
  },
  data: function() {
    return {
      settings: [],
      currentTab: tabs[0],
      // tabs: ['Home', 'Social', 'Password', 'Payment', 'Notification']
      tabs
    }
  },
  mounted() {
    this.loadProfileSettings()
  },
  computed: {
    // key() {
    //   return this.$route.path
    // },

    currentTabComponent() {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  },
  methods: {
    loadProfileSettings() {
      axios
        .get('http://localhost:3004/settings/0')
        .then(response => (this.settings = response.data))
        .catch(error => console.error(error))
    }
  }
}
</script>
