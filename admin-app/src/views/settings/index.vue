<template>
  <div class="settings">
    <aside class="settings__aside">
      <nav-settings />
    </aside>

    <section class="settings__content">
      <router-view :key="key" />
    </section>
  </div>
</template>

<script>
export default {
  name: 'Settings',
  components: {
    NavSettings: () => import('@/components/NavSettings')
  },
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>
