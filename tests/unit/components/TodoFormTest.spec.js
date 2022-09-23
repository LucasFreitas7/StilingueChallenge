import { shallowMount } from '@vue/test-utils'
import TodoForm from '../../../src/components/TodoForm.vue'


const addMock = jest.fn()
describe('TodoBar.vue', () => {
  const wrapper = shallowMount(TodoForm)
  it('Quando digitado algo no input e apertado enter deve chamar o metodo add', () => {
    wrapper.setMethods({add: addMock})
    const input = wrapper.find('input').trigger('keyup.enter')
    expect(addMock).toHaveBeenCalled()
  })
  it('teste de snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
