<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Занятия</router-link>| <router-link to="/teams">Команды</router-link>|
      <router-link to="/tournaments">Турниры</router-link>|
      <router-link to="/playgrounds">Площадки</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  background-color: #2c3e50;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #2c3e50;
  text-align: center;
  color: #fff;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #fff;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
