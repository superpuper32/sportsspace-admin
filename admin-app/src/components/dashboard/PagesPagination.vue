<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: page === 1 }">
        <a href="#" class="page-link" aria-label="Previous" @click.prevent="prevPage">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>

      <li v-for="item in maxPages" :key="item" class="page-item" :class="{ active: page === item }">
        <a class="page-link" href="#" @click.prevent="selectPage(item)">{{ item }}</a>
      </li>

      <li class="page-item" :class="{ disabled: page === maxPages }">
        <a class="page-link" href="#" aria-label="Next" @click.prevent="nextPage">
          <span aria-hidden="true">&raquo;</span>
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
  display: -ms-flexbox
  display: -webkit-box
  display: flex
  padding-left: 0
  list-style: none
  border-radius: 0.25rem

  .page-item

    &:first-child .page-link
      margin-left: 0
      border-top-left-radius: 0.25rem
      border-bottom-left-radius: 0.25rem

    &:last-child .page-link
      border-top-right-radius: 0.25rem
      border-bottom-right-radius: 0.25rem

    &.active .page-link
      z-index: 3
      color: #fff
      background-color: #007bff
      border-color: #007bff

    &.disabled .page-link
      color: #6c757d
      pointer-events: none
      cursor: auto
      background-color: #fff
      border-color: #dee2e6

  .page-link
    position: relative
    display: block
    padding: 0.5rem 0.75rem
    margin-left: -1px
    line-height: 1.25
    color: #007bff
    background-color: #fff
    border: 1px solid #dee2e6
</style>
