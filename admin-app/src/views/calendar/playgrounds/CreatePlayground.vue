<template>
  <section>
    <div class="calendar__grid calendar-form">
      <div class="form__create">
        <h3>Добавление игровой площадки</h3>

        <playground-form />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CreatePlayground',
  components: {
    PlaygroundForm: () => import('@/components/PlaygroundForm')
  }
}
</script>

<style lang="sass" scoped>
.calendar-form
  box-shadow: 0px 2px 16px rgba(153, 155, 168, 0.12)
  border-radius: 4px

.form__create
  padding: 20px 56px 20px 20px
  background-color: #fff
  border-left-top-radius: 4px
  border-left-bottom-radius: 4px

  h3
    margin-bottom: 30px
</style>
