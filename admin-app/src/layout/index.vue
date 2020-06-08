<template>
  <main class="main">
    <sidebar />

    <section class="content">
      <navbar />

      <app-main />

      <footer-bar />
    </section>
  </main>
</template>

<script>
import { Navbar, Sidebar, AppMain, FooterBar } from './components'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
    FooterBar
  }
}
</script>
