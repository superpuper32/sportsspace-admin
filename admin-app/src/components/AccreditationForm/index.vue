<template>
  <section class="create-form">
    <div class="create-form__columns">
      <div class="create-form__column">
        <div class="simple-input">
          <label for="quantity">Опыт турниров</label>

          <input type="text" name="quantity" placeholder="Имеется" />
        </div>

        <div class="simple-input">
          <label for="quantity">Предыдущие турниры</label>

          <input type="text" name="quantity" placeholder="Введите" />
        </div>
      </div>

      <div class="create-form__column">
        <div class="simple-input">
          <label for="sport">Вид спорта</label>

          <select name="sport" v-model="localPlayground.sport.kind">
            <option value>-Выберите спорт -</option>
            <option value="voleyball">Волейбол</option>
            <option value="football">Футбол</option>
          </select>
        </div>

        <div class="simple-input">
          <label for="quantity">XNj-nj</label>

          <input type="text" name="quantity" />
        </div>
      </div>
    </div>

    <h3>Карта владельца</h3>

    <div class="create-form__columns">
      <div class="create-form__column">
        <div class="simple-input">
          <label for="quantity">ИНН</label>

          <input type="text" name="quantity" placeholder="Введите ИНН" />
        </div>

        <div class="simple-input">
          <label for="quantity">Номер корр счет</label>

          <input type="text" name="quantity" placeholder="Введите" />
        </div>

        <div class="simple-input">
          <label for="quantity">Телефон</label>

          <input type="text" name="quantity" placeholder="Введите номер телефона" />
        </div>
      </div>

      <div class="create-form__column">
        <div class="simple-input">
          <label for="quantity">Номер лиц счет</label>

          <input type="text" name="quantity" placeholder="Введите" />
        </div>

        <div class="simple-input">
          <label for="quantity">БИК</label>

          <input type="text" name="quantity" placeholder="Введите" />
        </div>

        <div class="simple-input">
          <label for="quantity">Email</label>

          <input type="email" name="quantity" placeholder="Введите email" />
        </div>
      </div>
    </div>

    <div class="create-form__logo">
      <span>Паспорт ( 2 стр скан копии)</span>
      <div class="create-form__img">
        <span>Загрузить документ</span>
      </div>
    </div>

    <div class="create-form__logo">
      <span>СНИЛС</span>
      <div class="create-form__img">
        <span>Загрузить документ</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AccreditationForm',
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

<style lang="sass">
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
    padding: 20px 56px 20px 20px
    background-color: #F8FAFB

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
        border-radius: 4px
        display: flex
        justify-content: center
        align-items: center
        border: 1px dashed #E8ECEF
        background-color: #fff

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

    h3
        margin-bottom: 24px
</style>
