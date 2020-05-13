<template>
  <div
    class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative p-3"
  >
    <div class="col-auto d-none d-lg-block">
      <img src="../assets/team.svg" />
    </div>
    <div class="col p-4 d-flex flex-column position-static">
      <strong class="d-inline-block mb-2 text-primary">{{ team.address }}</strong>
      <h3 class="mb-0">🏐 {{ team.title }}</h3>
      <div class="mb-1 text-muted">создана 26.01.2020 20:51</div>
      <p class="card-text mb-auto">Капитан: {{ team.captainName.first }}</p>
      <p class="card-text mb-auto">Вид спорта: {{ team.sport.kind }}</p>
      <p class="card-text mb-auto">Участников {{ team.players }}</p>
      <p>Побед {{ team.wins }}</p>
      <p>Поражений {{ team.loses }}</p>

      <router-link :to="'/edit/' + team.id" class="stretched-link text-right mt-3">Изменить</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamCard',
  props: {
    team: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
