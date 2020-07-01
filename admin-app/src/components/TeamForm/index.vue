<template>
  <div class="create-team__columns">
    <div class="create-team__column">
      <div class="simple-input">
        <label for="name">Название</label>
        <input type="text" name="name" placeholder="Введите название" v-model="localTeam.title" />
      </div>

      <div class="simple-input">
        <label for="name">Капитан</label>
        <input type="text" name="name" placeholder="Введите капитана" v-model="localTeam.title" />
      </div>

      <simple-input title="Вид спорта" placeholder="Выберите вид спорта" v-model="localTeam.kind" />

      <simple-input
        title="Местоположение команды"
        placeholder="Выберите местоположение"
        v-model="localTeam.address"
      />
    </div>

    <div class="create-team__column">
      <div class="create-team__logo">
        <span>Логотип команды</span>
        <div class="create-team__img">
          <span>Загрузить изображение</span>
        </div>
      </div>
      <simple-input title="Город" placeholder="Выберите город" />

      <simple-input title="Адрес домашней  площадки" placeholder="Выберите адрес площадки" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamForm',
  components: {
    SimpleInput: () => import('@/components/SimpleInput')
  },
  model: {
    prop: 'team',
    event: 'ultrasave'
  },
  props: {
    team: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    localTeam: null
  }),
  watch: {
    localTeam: {
      deep: true,
      handler: 'updateTeam'
    }
  },
  created() {
    this.localTeam = Object.assign({}, this.team)
  },
  methods: {
    updateTeam() {
      this.$emit('ultrasave', this.localTeam)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../../styles/colors.sass'

.simple-input
  display: inline-block
  width: 100%
  font-size: 14px

  label
    display: block
    font-family: SF Pro Display
    font-style: normal
    font-weight: 500
    font-size: 14px
    line-height: 17px
    color: $font-black

  input
    width: 100%
    margin-bottom: 26px
    padding: 20px 0 20px 16px
    border: 1px solid #E8ECEF
    border-radius: 4px

    &::placeholder
      line-height: 21px
      color: #98a9bc

.create-team

  &__columns
    display: flex
    justify-content: space-between

  &__column
    width: 49%

  &__logo
    margin-bottom: 26px

    span
      display: block
      margin-bottom: 8px
      font-family: SF Pro Display
      font-style: normal
      font-weight: 500
      font-size: 14px
      line-height: 17px
      color: $font-black

  &__img
    height: 177px
    border: 1px dashed #E8ECEF
    border-radius: 4px
    display: flex
    justify-content: center
    align-items: center

    span
      position: relative
      font-family: SF Pro Display
      font-style: normal
      font-weight: 500
      font-size: 12px
      line-height: 14px
      text-transform: uppercase
      color: #98A9BC

      &:before
        content: ''
        display: block
        position: absolute
        top: 50%
        left: -32px
        width: 24px
        height: 24px
        background: url(../../assets/create_img.svg) center center no-repeat
        transform: translateY(-50%)
</style>
