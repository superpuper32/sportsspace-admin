<template>
  <main class="main">
    <sidebar />
    <app-main />
  </main>
</template>

<script>
import { Sidebar, AppMain } from './components'

export default {
  name: 'Layout',
  components: {
    Sidebar,
    AppMain
  }
}
</script>