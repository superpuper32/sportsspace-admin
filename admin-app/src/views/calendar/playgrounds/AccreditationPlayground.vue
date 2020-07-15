<template>
  <section>
    <div class="calendar__grid calendar-form">
      <div class="form__create">
        <h3>Заявка</h3>

        <accreditation-form v-model="playground" />

        <div class="calendar__flex">
          <button type="button" class="button button__main" @click="create">Отправить</button>
          <button class="button button__resting" @click="backToPlaygounds">Отменить</button>
        </div>
      </div>

      <div class="calendar__help">
        <h5>Аккредитация площадки</h5>

        <p>Пройдите процедуру регистрации Заполнив можете скачать составленный договор для подписи.</p>

        <span>Загрузить регламент турнира</span>

        <div class="create-form__img">
          <span>Reglament_turnira.pdf</span>
        </div>

        <span>Загрузить договор</span>

        <div class="create-form__img">
          <span>dogovor_20.05.20.pdf</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

const defaultPlayground = {
  id: null,
  index: '',
  title: '',
  quantityPlayers: 0,
  address: '',
  created: '',
  status: '',
  rate: '',
  latitude: '',
  longitude: '',
  sport: { kind: '' },
  workHours: { start: '', close: '' },
  parameters: { length: '', width: '', covering: '' },
  price: '',
  about: '',
  description: ''
}

export default {
  name: 'AccreditationPlayground',
  components: {
    AccreditationForm: () => import('@/components/AccreditationForm')
  },
  data: () => ({
    playground: defaultPlayground,
    url: 'http://localhost:3004/playgrounds/'
  }),
  methods: {
    backToPlaygounds() {
      this.$router.push({ path: '/calendar/playgrounds' })
    },

    create() {
      axios.post(this.url, this.playground).then(() => this.backToPlaygounds())
    }
  }
}
</script>

<style lang="sass" scoped>
.calendar-form
    border-radius: 4px

.form__create
    background-color: #fff
    border-radius: 4px
    box-shadow: 0px 2px 16px rgba(153, 155, 168, 0.12)

    h3
        margin-bottom: 0px
        padding: 20px 56px 20px 20px

.calendar__flex
    padding: 20px 56px 20px 20px

.create-form

    &__img
        margin-bottom: 24px
        height: 100px
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
            color: #0D9372

            &:before
                content: ''
                display: block
                position: absolute
                top: 50%
                left: -32px
                width: 24px
                height: 24px
                background: url(../../../assets/download_document.svg) center center no-repeat
                transform: translateY(-50%)
</style>
