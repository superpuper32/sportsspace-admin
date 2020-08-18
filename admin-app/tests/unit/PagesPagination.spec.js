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

  it('contain props page', () => {
    const wrapper = shallowMount(PagesPagination, {
      propsData: {
        page: 1,
        perPage: 5,
        total: 20
      }
    })

    expect(wrapper.vm.page).toBeDefined()
    expect(wrapper.vm.page).toEqual(1)

    wrapper.setProps({ page: 2 })
    expect(wrapper.vm.page).toEqual(2)
  })

  it('contain props perPage', () => {
    const wrapper = shallowMount(PagesPagination, {
      propsData: {
        page: 1,
        perPage: 5,
        total: 20
      }
    })

    expect(wrapper.vm.perPage).toBeDefined()
    expect(wrapper.vm.perPage).toEqual(5)

    wrapper.setProps({ perPage: 10 })
    expect(wrapper.vm.perPage).toEqual(10)
  })

  it('contain total props perPage', () => {
    const wrapper = shallowMount(PagesPagination, {
      propsData: {
        page: 1,
        perPage: 5,
        total: 20
      }
    })

    expect(wrapper.vm.total).toBeDefined()
    expect(wrapper.vm.total).toEqual(20)

    wrapper.setProps({ total: 2 })
    expect(wrapper.vm.total).toEqual(2)
  })

  it('calling .selectPage method generate input event', () => {
    const wrapper = shallowMount(PagesPagination, {
      propsData: {
        page: 1,
        perPage: 5,
        total: 20
      }
    })

    expect(wrapper.vm.selectPage).toBeDefined()
    wrapper.vm.selectPage(3)
    expect(wrapper.emitted('input').length).toEqual(1)
    expect(wrapper.emitted('input')[0]).toEqual([3])
  })

  it('correctly generates the number of list items', () => {
    const wrapper = shallowMount(PagesPagination, {
      propsData: {
        page: 1,
        perPage: 5,
        total: 20
      }
    })

    expect(wrapper.find('ul.pagination').findAll('.page-item').length).toEqual(6)
  })
})
