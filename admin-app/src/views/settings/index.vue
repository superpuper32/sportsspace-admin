<template>
  <div class="settings">
    <aside class="settings__aside">
      <nav-settings />
    </aside>

    <section class="settings__content">
      <router-view :key="key" v-bind:settings="settings" />
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Settings',
  components: {
    NavSettings: () => import('@/components/NavSettings')
  },
  data: function() {
    return {
      settings: []
    }
  },
  mounted() {
    this.loadProfileSettings()
  },
  computed: {
    key() {
      return this.$route.path
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
