<template>
  <section>
    <router-view :key="key" />
  </section>
</template>

<script>
export default {
  name: 'Playgrounds',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>
