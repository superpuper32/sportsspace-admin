<template>
  <section>
    <router-view :key="key" />
  </section>
</template>

<script>
export default {
  name: 'TeamsContent',

  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>
