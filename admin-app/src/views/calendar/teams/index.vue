<template>
  <section>
    <router-view :key="key" />
  </section>
</template>

<script>
export default {
  name: 'Teams'
  //   props: {
  //     calendar: {
  //       type: Object,
  //       required: true
  //     }
  //   }
}
</script>
