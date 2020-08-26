<template>
  <section class="create-form">
    <div class="simple-input">
      <label for="name">Название</label>
      <input
        type="text"
        name="name"
        placeholder="Введите название"
        v-model="localPlayground.title"
      />
    </div>

    <div class="create-form__columns">
      <div class="create-form__column">
        <div class="simple-input">
          <label for="quantity">Количество участников</label>

          <input
            type="text"
            name="quantity"
            placeholder="8/16/32"
            v-model="localPlayground.quantityPlayers"
          />
        </div>

        <div class="simple-input">
          <label for="sport">Вид спорта</label>

          <select name="sport" v-model="localPlayground.sport.kind">
            <option value>-Выберите спорт -</option>
            <option value="voleyball">Волейбол</option>
            <option value="football">Футбол</option>
          </select>
        </div>
      </div>

      <div class="create-form__column">
        <div class="simple-input">
          <label for="name">Стоимость</label>

          <input type="text" name="name" placeholder="0" v-model="localPlayground.price" />
        </div>

        <div class="create-form__columns">
          <div class="create-form__column">
            <div class="simple-input">
              <label for="start">Начало работы</label>

              <input type="time" name="start" v-model="localPlayground.workHours.start" />
            </div>
          </div>

          <div class="create-form__column">
            <div class="simple-input">
              <label for="close">Конец работы</label>

              <input type="time" name="close" v-model="localPlayground.workHours.close" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="create-form__columns">
      <div class="create-form__column2">
        <div class="simple-input">
          <label for="length">Длина (м)</label>

          <input
            type="number"
            name="length"
            placeholder="0"
            v-model="localPlayground.parameters.length"
          />
        </div>
      </div>

      <div class="create-form__column2">
        <div class="simple-input">
          <label for="width">Ширина (м)</label>

          <input
            type="number"
            name="width"
            placeholder="0"
            v-model="localPlayground.parameters.width"
          />
        </div>
      </div>

      <div class="create-form__column2">
        <div class="simple-input">
          <label for="covering">Покрытие</label>

          <input
            type="text"
            name="covering"
            placeholder="0"
            v-model="localPlayground.parameters.covering"
          />
        </div>
      </div>
    </div>

    <div class="simple-input">
      <label for="description">Описание</label>

      <input
        type="text"
        name="description"
        placeholder="Введите описание"
        v-model="localPlayground.description"
      />
    </div>

    <h3>Карта владельца</h3>

    <div class="create-form__columns">
      <div class="create-form__column">
        <label class="simple-checkbox">
          Раздевалка
          <input type="checkbox" checked />
          <span class="checkmark"></span>
        </label>

        <label class="simple-checkbox">
          Парковка
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
      </div>

      <div class="create-form__column">
        <label class="simple-checkbox">
          Трибуна
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>

        <label class="simple-checkbox">
          Буфет
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
      </div>

      <div class="create-form__column">
        <label class="simple-checkbox">
          Душ
          <input type="checkbox" checked />
          <span class="checkmark"></span>
        </label>
      </div>

      <div class="create-form__column">
        <label class="simple-checkbox">
          Свет
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
      </div>
    </div>

    <div class="create-form__logo">
      <span>Загрузить фотографии</span>
      <div class="create-form__img">
        <span>Загрузить документ</span>
      </div>
    </div>

    <div class="simple-input">
      <label for="address">Адрес</label>

      <input
        type="text"
        name="address"
        placeholder="Введите адрес"
        v-model="localPlayground.address"
      />
    </div>

    <div class="create-form__map"></div>

    <div class="create-form__columns">
      <div class="create-form__column">
        <div class="simple-input">
          <label for="playdays">Дни недели встреч</label>

          <input
            type="date"
            name="playdays"
            placeholder="30.05.2020"
            v-model="localPlayground.address"
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
            placeholder="16:00"
            v-model="localPlayground.address"
          />
        </div>

        <simple-input placeholder="Понедельник — 30.05.2020" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PlaygroundForm',
  components: {
    SimpleInput: () => import('@/components/SimpleInput')
  },
  model: {
    prop: 'playground',
    event: 'ultrasave'
  },
  props: {
    playground: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    localPlayground: null
  }),
  watch: {
    // playground: { // if updates from parent need deep equals func
    //   deep: true,
    //   handler() {
    //     if (deepEqual(this.playground, this.localPlayground)) {
    //       return
    //     }
    //     this.localPlayground = Object.assign({}, this.playground)
    //   }
    // },
    localPlayground: {
      deep: true,
      handler: 'updatePlayground'
    }
  },
  created() {
    this.localPlayground = Object.assign({}, this.playground)
  },
  methods: {
    updatePlayground() {
      this.$emit('ultrasave', Object.assign({}, this.localPlayground))
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../../../styles/colors.sass'

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
    background: url(../../../assets/Map.png) center center no-repeat
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
        background: url(../../../assets/create_img.svg) center center no-repeat
        transform: translateY(-50%)
</style>
