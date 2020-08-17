<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  /*50 = navbar  */
  padding: 24px;
  min-height: calc(100vh - 88px);
  position: relative;
  overflow: hidden;
  background-color: #f8fafb;
  z-index: 99;

  @media (max-width: 540px) {
    padding: 15px;
  }
}

.fixed-header + .app-main {
  padding-top: 88px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
