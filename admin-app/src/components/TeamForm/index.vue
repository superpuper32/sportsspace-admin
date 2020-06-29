<template>
  <div class="create-team__columns">
    <div class="create-team__column">
      <simple-input title="Название" placeholder="Введите название" v-model="localTeam.title" />

      <simple-input title="Капитан" placeholder="Выберите капитана" />

      <simple-input title="Вид спорта" placeholder="Выберите вид спорта" :value="localTeam.kind" />

      <simple-input
        title="Местоположение команды"
        placeholder="Выберите местоположение"
        :value="localTeam.address"
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
      this.$emit('ultrasave', Object.assign({}, this.localTeam))
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../../styles/colors.sass'

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
