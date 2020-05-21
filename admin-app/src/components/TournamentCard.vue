<template>
  <div class="hello">
    <div
      class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative p-3"
    >
      <div class="col-auto d-none d-lg-block">
        <img src="../assets/cup.svg" />
      </div>

      <div class="col p-4 d-flex flex-column position-static">
        <strong class="d-inline-block mb-2 text-primary">2 Круг ЮВ</strong>
        <h3 class="mb-0">🏆 {{ tournament.title }}</h3>
        <div class="mb-1 text-muted">создана 26.01.2020 20:51</div>
        <p class="card-text mb-auto">Вид спорта: Волейбол</p>
        <p class="card-text mb-auto">Команды: 10</p>
        <p class="card-text mb-auto">Дата проведения: 21.12.2020 02:00</p>
        <a href="#" class="stretched-link">Удалить Начать</a>
      </div>

      <div>
        <img src="../assets/percent.svg" />
      </div>
    </div>
  </div>
  <div>{{ msg }}</div>
</template>

<script>
export default {
  name: 'TournamentCard',
  props: {
    msg: {
      type: String,
      required: true
    },
    tournament: {
      type: Object,
      requird: true
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
