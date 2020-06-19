<template>
  <div class="package-card">
    <div class="package-card__title">
      <h5>{{ title }}</h5>
    </div>

    <div class="package-card__features">
      <div class="package-card__left">
        <div class="package-card__quantity">0/12</div>
        <div class="package-card__messages">4</div>
      </div>

      <div class="package-card__date">20 Май 2020</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PackageCard',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
.package-card
  margin-bottom: 16px
  padding: 19px 30px 14px 24px
  display: flex
  flex-direction: column
  border-radius: 4px
  background-color: #fff
  box-shadow: 0px 2px 16px rgba(153, 155, 168, 0.12)
  border-bottom: 4px solid #1ED760
  border-left-bottom-radius: 1px

  &__title
    position: relative
    padding-left: 52px
    color: #2C2E3F

    &:before
      content: ''
      position: absolute
      top: 50%
      left: 0
      width: 40px
      height: 40px
      background: url(../../assets/package_voleybol.svg) center center no-repeat
      transform: translateY(-50%)

  &__features
    margin-top: 26px
    display: flex
    justify-content: space-between
    align-items: center
    font-family: SF Pro Display
    font-style: normal
    font-weight: normal
    font-size: 14px
    line-height: 21px
    color: #98A9BC

  &__left
    display: flex
    align-items: center

  &__quantity
    margin-right: 26px
    padding-left: 24px
    position: relative

    &:before
      content: ''
      position: absolute
      top: 50%
      left: 0
      width: 18px
      height: 18px
      background: url(../../assets/package_quantity.svg) center center no-repeat
      transform: translateY(-50%)

  &__messages
    position: relative
    padding-left: 25px

    &:before
      content: ''
      position: absolute
      top: 50%
      left: 0
      width: 18px
      height: 18px
      background: url(../../assets/package_messages.svg) center center no-repeat
      transform: translateY(-50%)

  &__date
    position: relative
    padding-left: 25px

    &:before
      content: ''
      position: absolute
      top: 50%
      left: 0
      width: 18px
      height: 18px
      background: url(../../assets/package_date.svg) center center no-repeat
      transform: translateY(-50%)
</style>
