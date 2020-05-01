<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Создать свою команду
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">здесь</a>.
    </p>
    <h3>Стартовый комплект</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
          >Аккредитация для бизнеса</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router"
          target="_blank"
          rel="noopener"
          >Помочь с выбором турнира</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
          >Помочь с выбором Тренера</a
        >
      </li>
    </ul>
    <h3>Новое</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Игровая практика</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener">Найти себе команду</a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Добавить</a>
      </li>
    </ul>
    <h3>Заслуживающее внимания</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener">Поиграть самому</a>
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">Поиграть с командой</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener"
          >Поиграть с друзьями</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TeamCard',
  props: {
    msg: String,
    // eslint-disable-next-line vue/require-prop-type-constructor
    required: true
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
