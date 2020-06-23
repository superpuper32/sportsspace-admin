<template>
  <section>
    <router-view :key="key" />
  </section>
</template>

<script>
export default {
  name: 'Teams',
  computed: {
    key() {
      return this.$route.path
    }
  }
  //   props: {
  //     calendar: {
  //       type: Object,
  //       required: true
  //     }
  //   }
}
</script>
