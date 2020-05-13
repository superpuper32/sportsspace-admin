<template>
  <div class="team">
    <div>
      <div class="col-md-6">
        <div
          class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative p-3"
        >
          <div class="col-auto d-none d-lg-block">
            <svg
              width="60"
              height="54"
              viewBox="0 0 60 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.75 0L11.25 1.59375C8.775 2.26875 6.7875 3.7875 5.4375 5.8125L0 18L6.75 21.375L9 17.0625V40.5C9 42.975 11.025 45 13.5 45H31.5C33.975 45 36 42.975 36 40.5V17.0625L38.25 21.375L45 18L39.5625 5.8125C38.2125 3.7875 36.225 2.26875 33.75 1.59375L29.25 0C29.25 0 27.675 4.5 22.5 4.5C17.325 4.5 15.75 0 15.75 0ZM44.25 9L48.9375 19.4062L39 24.375V40.5C39 44.637 35.634 48 31.5 48H24V49.5C24 51.975 26.025 54 28.5 54H46.5C48.975 54 51 51.975 51 49.5V26.0625L53.25 30.375L60 27L54.5625 14.8125C53.2125 12.7875 51.225 11.2688 48.75 10.5938L44.25 9ZM22.4062 12C28.1752 12 28.7812 15.6158 28.7812 16.9688C28.7812 19.4167 26.337 20.6205 25.875 20.8125C26.943 21.1665 29.0625 22.1775 29.0625 24.9375C29.0595 28.8975 25.1602 30.0938 22.4062 30.0938C17.4653 30.0938 15.7455 26.8913 15.9375 25.0312H19.6875C19.5795 25.6702 20.226 27.2812 22.5 27.2812C25.197 27.2812 25.3125 25.2068 25.3125 24.8438C25.3125 22.1017 22.6987 22.2188 22.2188 22.2188H20.25V19.5H22.2188C23.1728 19.5 25.0312 19.2255 25.0312 17.0625C25.0312 14.9445 22.932 14.8125 22.5 14.8125C20.355 14.8125 19.9688 16.2383 19.9688 16.7812H16.125C16.125 13.2983 19.8382 12 22.4062 12Z"
                fill="#657E94"
                fill-opacity="0.5"
              />
            </svg>
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
      </div>
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
