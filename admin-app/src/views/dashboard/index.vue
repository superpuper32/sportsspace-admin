<template>
  <main class="main">
    <profile />
  </main>
</template>

<script>
export default {
  name: 'Dashboard',
  components: {
    Profile: () => import('@/components/Profile/index.vue')
  }
}
</script>
