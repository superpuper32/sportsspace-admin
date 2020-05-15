<template>
  <div class="container teams">
    <h1 class="text-left">Команды мои</h1>

    <div class="row mb-2">
      <div class="col-md-6" v-for="team in teams" :key="team.index">
        <team-card v-bind:team="team" />
      </div>
    </div>

    <h2 class="text-left">Создание</h2>
    <p>
      Создать свою команду
      <a href="#" target="_blank" rel="noopener">здесь</a>.
    </p>
    <h3>Стартовый комплект</h3>
    <team-recomend v-bind="team" />
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
    <h3>Новое</h3>
    <ul>
      <li>
        <a href="#" target="_blank" rel="noopener">Игровая практика</a>
      </li>
      <li>
        <a href="#" target="_blank" rel="noopener">Найти себе команду</a>
      </li>
      <li>
        <a href="#" target="_blank" rel="noopener">Добавить</a>
      </li>
    </ul>
    <h3>Заслуживающее внимания</h3>
    <ul>
      <li>
        <a href="#" target="_blank" rel="noopener">Поиграть самому</a>
      </li>
      <li>
        <a href="#" target="_blank" rel="noopener">Поиграть с командой</a>
      </li>
      <li>
        <a href="#" target="_blank" rel="noopener">Поиграть с друзьями</a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Teams',
  components: {
    TeamCard: () => import('@/components/TeamCard.vue'),
    TeamRecomend: () => import('@/components/TeamRecomend.vue')
  },
  data: function() {
    return {
      teams: []
    }
  },
  mounted() {
    this.loadTeams()
  },
  methods: {
    loadTeams() {
      const token = '1234567890' // localStorage/cookies

      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

      axios
        .get('http://localhost:3004/teams', config)
        .then(response => (this.teams = response.data))
        .catch(error => console.error(error))
    }
  }
}
</script>
