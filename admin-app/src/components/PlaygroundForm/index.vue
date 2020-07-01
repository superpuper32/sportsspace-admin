<template>
  <section class="create-form">
    <div class="simple-input">
      <label for="name">Название</label>
      <input type="text" name="name" placeholder="Введите название" :value="playground.title" />
    </div>

    <div class="create-form__columns">
      <div class="create-form__column">
        <div class="simple-input">
          <label for="name">Количество участников</label>
          <input type="text" name="name" placeholder="8/16/32" :value="playground.title" />
        </div>

        <simple-input title="Вид спорта" placeholder="Футбол" :value="playground.sport.kind" />
      </div>

      <div class="create-form__column">
        <simple-input title="Стоимость" placeholder="0" />

        <div class="create-form__columns">
          <div class="create-form__column">
            <simple-input title="Начало игры" placeholder="00:00" />
          </div>

          <div class="create-form__column">
            <simple-input title="Конец игры" placeholder="00:00" />
          </div>
        </div>
      </div>
    </div>

    <div class="create-form__columns">
      <div class="create-form__column2">
        <simple-input title="Длина (м)" placeholder="0" />
      </div>

      <div class="create-form__column2">
        <simple-input title="Ширина (м)" placeholder="0" />
      </div>

      <div class="create-form__column2">
        <simple-input title="Высота (м)" placeholder="0" />
      </div>
    </div>

    <simple-input title="Описание" placeholder="Введите описание" />

    <div class="create-form__logo">
      <span>Загрузить фотографии</span>
      <div class="create-form__img">
        <span>Загрузить документ</span>
      </div>
    </div>

    <simple-input title="Адрес" placeholder="Введите адрес" />

    <div class="create-form__map"></div>

    <div class="create-form__columns">
      <div class="create-form__column">
        <simple-input title="Дни недели встреч" placeholder="30.05.2020" />

        <simple-input placeholder="Понедельник — 30.05.2020" />
      </div>

      <div class="create-form__column">
        <simple-input title="Время тренировки" placeholder="16:00" />

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
  props: {
    playground: {
      type: Object,
      required: true
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
