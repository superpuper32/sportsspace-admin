<template>
  <router-view :key="key" />
</template>

<script>
export default {
  name: 'Tournaments',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>
