import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import TodoList from '../../../src/components/TodoList.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

const handleClickOnFilterMock = jest.fn()
const clearDoneMock = jest.fn()
describe('TodoBar.vue', () => {
  let getters
  let store

  beforeEach(() => {
    getters = {
      doneAll: () => [1, 2, 3],
      undoneAll: () => [1, 2, 3]
    }
    store = new Vuex.Store({
        getters
    })
  })
  it('teste de snapshot', () => {
    const wrapper = shallowMount(TodoList, { store, localVue })
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('Quando clicado no All, deve ser disparado o evento de filtro', () => {
    const wrapper = shallowMount(TodoList, { store, localVue })
    wrapper.setMethods({handleClickOnFilter: handleClickOnFilterMock})
    const input = wrapper.find('a').trigger('click')
    expect(handleClickOnFilterMock).toHaveBeenCalled()
  })
  it('Quando clicado no Active, deve ser disparado o evento de filtro', () => {
    const wrapper = shallowMount(TodoList, { store, localVue })
    wrapper.setMethods({handleClickOnFilter: handleClickOnFilterMock})
    const input = wrapper.findAll('a').at(1).trigger('click')
    console.log(wrapper.html())
    expect(handleClickOnFilterMock).toHaveBeenCalled()
  })
  it('Quando clicado no Completed, deve ser disparado o evento de filtro', () => {
    const wrapper = shallowMount(TodoList, { store, localVue })
    wrapper.setMethods({handleClickOnFilter: handleClickOnFilterMock})
    const input = wrapper.findAll('a').at(2).trigger('click')
    expect(handleClickOnFilterMock).toHaveBeenCalled()
  })
  it('Quando clicado no Clear Completed, deve ser disparado a função ClearDone', () => {
    const wrapper = shallowMount(TodoList, { store, localVue })
    wrapper.setMethods({clearDone: clearDoneMock})
    const input = wrapper.findAll('a').at(3).trigger('click')
    expect(clearDoneMock).toHaveBeenCalled()
  })
})
