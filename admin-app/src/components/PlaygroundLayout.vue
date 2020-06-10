<template>
  <div
    class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative p-3"
  >
    <div class="col-auto d-none d-lg-block">
      <img src="../assets/playground.svg" />
    </div>
    <div class="col p-4 d-flex flex-column position-static">
      <strong class="d-inline-block mb-2 text-primary">{{ playground.title }}</strong>
      <h3 class="mb-0">📍{{ playground.address }}</h3>
      <div class="mb-1 text-muted">создан 26.01.2020 20:51</div>
      <p class="card-text mb-auto">Вид спорта: {{ playground.sport.kind }}</p>
      <p class="card-text mb-auto">Покрытие: Линолеум</p>
      <a href="#" class="stretched-link">Регистрация Подробнее</a>
    </div>
    <div class="col-auto d-none d-lg-block">
      <img src="../assets/stars.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlaygroundLayout',
  props: {
    playground: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  display: block;
}
</style>
