<template>
  <div class="simple-input">
    <label for="name">{{ title }}</label>
    <input type="text" name="name" :placeholder="placeholder" />
    <label for="before"></label>
  </div>
</template>

<script>
export default {
  name: 'SelectInput',
  props: {
    title: String,
    placeholder: String
  }
}
</script>

<style lang="sass" scoped>
@import '../../styles/colors.sass'
.simple-input
    padding-right: 26px
    width: 50%
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
        // position: relative
        width: 100%
        margin-bottom: 26px
        padding: 20px 0 20px 16px
        border: 1px solid #E8ECEF
        border-radius: 4px

        &::placeholder
            line-height: 21px
            color: #98a9bc

    label
        position: relative

        &:after
            content: ''
            position: absolute
            top: 50%
            right: 0px
            width: 20px
            height: 20px
            background: url(../../assets/select-input_arrow.svg) center center no-repeat
            transform: translateY(-50%)
            z-index: 3
</style>
