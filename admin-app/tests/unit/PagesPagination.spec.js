import { shallowMount } from '@vue/test-utils'
import PagesPagination from '@/components/dashboard/PagesPagination.vue'

describe('PagesPagination.vue', () => {
  it('is a Vue component', () => {
    const wrapper = shallowMount(PagesPagination, {
      propsData: {
        page: 1,
        perPage: 1,
        total: 1
      }
    })

    expect(wrapper.isVueInstance()).toEqual(true)
  })
})
