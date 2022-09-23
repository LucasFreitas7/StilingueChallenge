import { shallowMount } from '@vue/test-utils'
import TodoListItem from '../../../src/components/TodoListItem.vue'


const handleClickMock = jest.fn()
const handleClickOnDeleteMock= jest.fn()
describe('TodoListItem.vue', () => {
  const wrapper = shallowMount(TodoListItem, {
    propsData:{
        todo: {
            id:1,
            name: '10 minutes meditation',
            done: false
          }
    }
  })
  it('teste de snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('Quando cliclado no Check do Item deve ser disparado a função handleClick', () => {
  
    wrapper.setMethods({handleClick: handleClickMock})
    wrapper.findAll('div').at(1).trigger('click')
    expect(handleClickMock).toHaveBeenCalled()
  })
  it('Quando cliclado no delete do Item deve ser disparado a função handleClickOnDelete', () => {
    wrapper.setMethods({handleClickOnDelete: handleClickOnDeleteMock})
    wrapper.findAll('div').at(2).trigger('click')
    expect(handleClickOnDeleteMock).toHaveBeenCalled()
  })
})
