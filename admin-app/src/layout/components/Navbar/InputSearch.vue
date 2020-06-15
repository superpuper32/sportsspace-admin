<template>
  <div class="top-bar__search">
    <input type="text" placeholder="Поиск..." />
  </div>
</template>

<script>
export default {
  name: 'InputSearch'
}
</script>

<style lang="sass" scoped>
.top-bar__search
    position: relative

    input
        padding-left: 34px
        height: 100%
        outline: none
        border: none
        font-style: normal
        font-weight: 300
        font-size: 14px
        line-height: 21px
        color: #98a9bc

    &::before
        content: ''
        position: absolute
        top: 50%
        left: 0
        width: 24px
        height: 24px
        background-repeat: no-repeat
        background-position-y: 50%
        background-image: url(../../../assets/input_search.svg)
        transform: translateY(-50%)
</style>
