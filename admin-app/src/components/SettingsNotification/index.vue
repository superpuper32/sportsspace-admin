<template>
  <div class="settings-notification">
    <div class="settings-notification__info">
      <span class="settings-notification__title">{{ title }}</span>
      <div class="settings-notification__description">Общие обновления системы</div>
    </div>

    <label class="toggle-button toggled" arial-label="Unsubscribe" for="Unsubscribe">
      <input type="checkbox" class="toggle-button__input" id="Unsubscribe" checked />
      <span class="toggle-button__span">Unsubscribe From Everything</span>
      <div class="toggle-button__track"></div>
      <div class="toggle-button__thumb"></div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'SettingsNotification',
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style lang="sass" scoped>
.settings-notification
  margin-right: 26px
  margin-bottom: 30px
  display: flex
  justify-content: space-between
  align-items: center
  font-style: normal
  font-weight: normal

  &__title
    font-size: 17px
    line-height: 22px
    color: #2C2E3F

  &__description
    font-size: 14px
    line-height: 21px
    color: #485C73

.toggle-button
  display: inline-block
  position: relative
  cursor: pointer
  background-color: initial
  border: 0
  padding: 0
  outline: none

  &__input
    position: absolute
    width: 1px
    height: 1px
    padding: 0
    overflow: hidden
    clip: rect(0,0,0,0)
    white-space: nowrap
    -webkit-clip-path: inset(50%)
    clip-path: inset(50%)
    border: 0

  &__span
    position: absolute
    width: 1px
    height: 1px
    padding: 0
    overflow: hidden
    clip: rect(0,0,0,0)
    white-space: nowrap
    -webkit-clip-path: inset(50%)
    clip-path: inset(50%)
    border: 0

  &__track
    width: 40px
    height: 22px
    padding: 0
    border-radius: 12px
    background-color: #F8FAFB
    border: 1px solid #E8ECEF
    transition: all .2s ease

  &__thumb
    position: absolute
    top: 3px
    left: 5px
    width: 16px
    height: 16px
    border-radius: 12px
    transition: all .5s cubic-bezier(.23,1,.32,1)
    background-color: #98A9BC

.toggled

  .toggle-button__track
    background-color: #008dff

  .toggle-button__thumb
    background-color: #fff
    left: 20px
</style>
