<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: page === 1 }">
        <a href="#" class="page-link" aria-label="Previous" @click.prevent="prevPage">
          <!-- <span aria-hidden="true">&laquo;</span> -->
        </a>
      </li>

      <li v-for="item in maxPages" :key="item" class="page-item" :class="{ active: page === item }">
        <a class="page-link" href="#" @click.prevent="selectPage(item)">{{ item }}</a>
      </li>

      <li class="page-item" :class="{ disabled: page === maxPages }">
        <a class="page-link" href="#" aria-label="Next" @click.prevent="nextPage">
          <!-- <span aria-hidden="true">&raquo;</span> -->
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'PagesPagination',

  model: {
    prop: 'page'
  },

  props: {
    page: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  },

  computed: {
    maxPages() {
      return Math.ceil(this.total / this.perPage)
    }
  },

  methods: {
    selectPage(page) {
      this.$emit('input', page)
    },

    prevPage() {
      const page = this.page - 1
      page > 0 ? this.selectPage(page) : 0
    },

    nextPage() {
      const page = this.page + 1
      page <= this.maxPages ? this.selectPage(page) : 0
    }
  }
}
</script>

<style lang="sass" scoped>
.pagination
  margin-top: 2rem
  display: -ms-flexbox
  display: -webkit-box
  display: flex
  padding-left: 0
  list-style: none
  border-radius: 0.25rem

  .page-item

    &:first-child .page-link
      position: relative
      margin-right: 2rem
      margin-left: 0
      padding: 7px
      width: 26px
      height: 26px
      background-color: #fff
      border-top-left-radius: 0.25rem
      border-bottom-left-radius: 0.25rem

      &:before
        content: ''
        position: absolute
        top: 50%
        left: 50%
        width: 26px
        height: 26px
        background: url(../../assets/pagination_arrow.svg) center center no-repeat
        transform: translate(-50%, -50%)

    &:last-child .page-link
      margin-right: 0
      margin-left: 2rem
      padding: 7px
      width: 26px
      height: 26px
      background-color: #fff
      border-top-right-radius: 0.25rem
      border-bottom-right-radius: 0.25rem

      &:before
        content: ''
        position: absolute
        top: 50%
        left: 50%
        width: 26px
        height: 26px
        background: url(../../assets/pagination_arrow.svg) center center no-repeat
        transform: translate(-50%, -50%) rotate(180deg)

    &.active .page-link
      z-index: 3
      color: #008DFF

    &.disabled .page-link
      color: #6c757d
      pointer-events: none
      cursor: auto
      background-color: #fff
      border-color: #dee2e6

  .page-link
    margin-right: 0.25rem
    margin-left: 0.25rem
    padding: 0.75rem 1.125rem
    position: relative
    display: block
    margin-left: -1px
    font-family: SF Pro Display
    font-style: normal
    font-weight: 500
    font-size: 14px
    line-height: 17px
    color: #485C73
    border: 1px solid #E8ECEF
    border-radius: 0.25rem
</style>
