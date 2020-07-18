<template>
  <section class="create-form">
    <div class="simple-input">
      <label for="name">Название</label>
      <input type="text" name="name" placeholder="Введите название" v-model="localTournament.title" />
    </div>

    <div class="create-form__columns">
      <div class="create-form__column">
        <div class="simple-input">
          <label for="sportKind">Вид спорта</label>

          <select name="sportKind" v-model="localTournament.sportKind">
            <option value>Теннис</option>
            <option value="voleyball">Волейбол</option>
            <option value="football">Футбол</option>
          </select>
        </div>
      </div>

      <div class="create-form__column">
        <div class="simple-input">
          <label for="sport">Формат турнира</label>

          <select name="sport" v-model="localTournament.formTournament">
            <option value>- Сингл -</option>
            <option value="double">Double</option>
            <option value="round-robin">Round Robin</option>
          </select>
        </div>
      </div>
    </div>

    <div class="simple-input">
      <label for="address">Адрес</label>

      <input
        type="text"
        name="address"
        placeholder="Введите адрес"
        v-model="localTournament.address"
      />
    </div>

    <div class="create-form__map"></div>

    <div class="simple-input">
      <label for="location">Арендовать</label>

      <select name="location" v-model="localTournament.location">
        <option value>Спортивный комплекс - СК «Прометей»</option>
        <option value="address1">address 1</option>
        <option value="address2">address 2</option>
      </select>
    </div>

    <div class="create-form__logo">
      <span>Загрузить фотографии</span>
      <div class="create-form__img">
        <span>Загрузить документ</span>
      </div>
    </div>

    <div class="create-form__columns">
      <div class="create-form__column">
        <div class="simple-input">
          <label for="quantityPlayers">Количество участников</label>

          <select name="quantityPlayers" v-model="localTournament.quantityPlayers">
            <option value>8/16/32</option>
            <option value="16">8/16/32</option>
            <option value="32">8/16/32</option>
          </select>
        </div>
      </div>

      <div class="create-form__column">
        <div class="simple-input">
          <label for="sport">Дата проведения</label>

          <select name="sport" v-model="localTournament.workHours">
            <option value>- Сингл -</option>
            <option value="double">Double</option>
            <option value="round-robin">Round Robin</option>
          </select>
        </div>
      </div>
    </div>

    <div class="simple-input">
      <label for="description">Описание</label>

      <input
        type="text"
        name="description"
        placeholder="Введите описание"
        v-model="localTournament.description"
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
            v-model="localTournament.address"
          />
        </div>

        <simple-input placeholder="Понедельник — 30.05.2020" />
      </div>

      <div class="create-form__column">
        <div class="simple-input">
          <label for="playtime">Время тренировки</label>

          <input type="time" name="playtime" placeholder="16:00" v-model="localTournament.address" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TournamentForm',
  components: {
    SimpleInput: () => import('@/components/SimpleInput')
  },
  model: {
    prop: 'tournament',
    event: 'ultrasave'
  },
  props: {
    tournament: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    localTournament: null
  }),
  watch: {
    // playground: { // if updates from parent need deep equals func
    //   deep: true,
    //   handler() {
    //     if (deepEqual(this.playground, this.localTournament)) {
    //       return
    //     }
    //     this.localTournament = Object.assign({}, this.playground)
    //   }
    // },
    localTournament: {
      deep: true,
      handler: 'updatePlayground'
    }
  },
  created() {
    this.localTournament = Object.assign({}, this.tournament)
  },
  methods: {
    updateTournament() {
      this.$emit('ultrasave', Object.assign({}, this.localTournament))
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../../styles/colors.sass'

h3
    margin-bottom: 24px

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

    input, select
        width: 100%
        margin-bottom: 26px
        padding: 20px 0 20px 16px
        border: 1px solid #E8ECEF
        border-radius: 4px

        &::placeholder
            line-height: 21px
            color: #98a9bc

.create-form

    &__columns
        display: flex
        justify-content: space-between

    &__column
        width: 49%

    &__column2
        width: 31%

    &__map
        margin-bottom: 26px
        width: 100%
        height: 248px
        background: url(../../assets/Map.png) center center no-repeat
        background-size: cover
        border-radius: 4px

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
