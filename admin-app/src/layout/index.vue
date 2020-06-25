<template>
  <main class="main">
    <sidebar />

    <section class="content">
      <nav-bar />

      <app-main />

      <footer-bar />
    </section>
  </main>
</template>

<script>
import { NavBar, Sidebar, AppMain, FooterBar } from './components'

export default {
  name: 'Layout',
  components: {
    NavBar,
    Sidebar,
    AppMain,
    FooterBar
  }
}
</script>
