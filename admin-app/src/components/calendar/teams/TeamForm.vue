<template>
  <section>
    <div class="create-form__columns">
      <div class="create-form__column create-form__column_left">
        <div class="simple-input">
          <label for="name">Название</label>
          <input type="text" name="name" placeholder="Введите название" v-model="localTeam.name" />
        </div>

        <div class="simple-input">
          <label for="captain">Капитан</label>
          <input
            type="text"
            name="captain"
            placeholder="Выберите капитана"
            v-model="localTeam.user_id"
          />
        </div>

        <div class="simple-input">
          <label for="sport">Вид спорта</label>

          <select name="sport">
            <option value="voleyball">Волейбол</option>
            <option value="football">Футбол</option>
          </select>
        </div>

        <div class="simple-input">
          <label for="address-team">Местоположение команды</label>

          <input
            type="text"
            name="address-team"
            placeholder="Выберите местоположение"
            v-model="localTeam.address"
          />
        </div>
      </div>

      <div class="create-form__column create-form__column_right">
        <div class="create-form__logo">
          <span>Логотип команды</span>

          <div class="create-form__img">
            <span>Загрузить изображение</span>
          </div>
        </div>

        <div class="simple-input">
          <label for="address">Город</label>

          <input
            type="text"
            name="address"
            placeholder="Выберите город"
            v-model="localTeam.address"
          />
        </div>

        <div class="simple-input">
          <label for="address">Адрес домашней площадки</label>

          <input
            type="text"
            name="address-playground"
            placeholder="Выберите адрес площадки"
            v-model="localTeam.address_zal"
          />
        </div>
      </div>
    </div>

    <div class="create-form__map"></div>

    <div class="simple-input">
      <label for="trainer">Тренер</label>

      <input
        type="text"
        name="trainer"
        placeholder="Выберите тренера"
        v-model="localTeam.trainer"
      />
    </div>

    <div class="create-form__columns">
      <div class="create-form__column">
        <div class="simple-input">
          <label for="playdays">Дни недели встреч</label>

          <input
            type="date"
            name="playdays"
            placeholder="30.05.2020"
            v-model="localTeam.playdays"
          />
        </div>

        <simple-input placeholder="Понедельник — 30.05.2020" />
      </div>

      <div class="create-form__column">
        <div class="simple-input">
          <label for="playtime">Время тренировки</label>

          <input
            type="time"
            name="playtime"
            placeholder="Время тренировки"
            v-model="localTeam.playtime"
          />
        </div>

        <simple-input placeholder="Понедельник — 30.05.2020" />
      </div>
    </div>

    <div class="simple-input">
      <label for="description">Описание</label>

      <input
        type="text"
        name="description"
        placeholder="Введите информацию"
        v-model="localTeam.description"
      />
    </div>

    <simple-input title="Пригласить участников " placeholder="Введите имя участника" />
  </section>
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
  computed: {
    fullName() {
      return `${this.team.captainName.first} ${this.team.captainName.last}`
    }
  },
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
@import '../../../styles/colors.sass'

.simple-input
  // display: inline-block
  margin-right: 20px
  width: 100%
  position: relative
  width: auto
  font-size: 14px

  label
    display: block
    font-family: SF Pro Display
    font-style: normal
    font-weight: 500
    font-size: 14px
    line-height: 17px
    color: $font-black

  input, select
    width: 100%
    margin-bottom: 26px
    padding: 20px 0px 20px 16px
    border: 1px solid #E8ECEF
    border-radius: 4px

    &::placeholder
      line-height: 21px
      color: #98a9bc

.create-form

  &__columns
    margin: 0px -12px
    display: flex
    // justify-content: space-between
    justify-content: center
    align-items: center

  &__column
    margin: 0px 12px
    // width: 49%

    &_left
      display: inline-flex
      flex: 2 1 200px
      flex-direction: column

    &_right
      display: inline-flex
      flex: 2 1 200px
      flex-direction: column

  &__map
    margin-bottom: 26px
    width: 100%
    height: 248px
    background: url(../../../assets/Map.png) center center no-repeat
    background-size: cover
    border-radius: 4px

  &__logo
    margin-bottom: 26px
    width: auto

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
        background: url(../../../assets/create_img.svg) center center no-repeat
        transform: translateY(-50%)
</style>
