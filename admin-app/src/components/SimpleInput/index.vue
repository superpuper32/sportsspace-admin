<template>
  <div class="simple-input">
    <label for="name">{{ title }}</label>
    <input type="text" name="name" :placeholder="placeholder" :value="value" />
  </div>
</template>

<script>
export default {
  name: 'SimpleInput',
  props: {
    title: String,
    placeholder: String,
    value: String
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
</style>
