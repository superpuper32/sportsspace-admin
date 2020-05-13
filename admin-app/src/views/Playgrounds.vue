<template>
  <div class="playgrounds">
    <div class="playground">
      <div class="container">
        <h1 class="text-left">Площадки</h1>

        <div class="row mb-2">
          <div class="col-md-6" v-for="playground in playgrounds" :key="playground.index">
            <playground-layout v-bind:playground="playground" />
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <h1 class="text-left">Площадки</h1>
      <p>
        Создать свою площадку
        <a href="#" target="_blank" rel="noopener">здесь</a>.
      </p>
      <h3>Стартовый комплект</h3>
      <ul>
        <li>
          <a href="#" target="_blank" rel="noopener">Аккредитация для бизнеса</a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener">Помочь с выбором турнира</a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener">Помочь с выбором Тренера</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Playgrounds',
  components: {
    PlaygroundLayout: () => import('@/components/PlaygroundLayout.vue')
  },
  data: function() {
    return {
      playgrounds: []
    }
  },
  mounted() {
    this.loadPlaygrounds()
  },
  methods: {
    loadPlaygrounds() {
      axios
        .get('http://localhost:3004/playgrounds')
        .then(response => (this.playgrounds = response.data))
        .catch(error => console.error(error))
    }
  }
}
</script>
