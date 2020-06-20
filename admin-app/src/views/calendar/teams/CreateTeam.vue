<template>
  <section>
    <div class="calendar__grid calendar-form">
      <div class="form__create-team">
        <h3>Создание команды</h3>

        <simple-input title="Название" />

        <simple-input title="Капитан" />

        <simple-input title="Вид спорта" />

        <simple-input title="Местоположение команды" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CreateTeam',
  components: {
    SimpleInput: () => import('@/components/SimpleInput')
  }
}
</script>

<style lang="sass" scoped>
.calendar-form
  box-shadow: 0px 2px 16px rgba(153, 155, 168, 0.12)
  border-radius: 4px

.form__create-team
  padding: 20px
  background-color: #fff
  border-left-top-radius: 4px
  border-left-bottom-radius: 4px

  h3
    margin-bottom: 30px
</style>
