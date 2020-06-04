<template>
  <main class="main">
    <sidebar />

    <section class="content">
      <navbar />
      <app-main />
    </section>
  </main>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  }
}
</script>