import { shallowMount } from '@vue/test-utils'


const toggleThemeMock = jest.fn()
describe('TodoBar.vue', () => {
  const wrapper = shallowMount(TodoBar)
  it('Quando clicado no botão deve trocar o tema da aplicação', () => {
    wrapper.setMethods({toggleTheme: toggleThemeMock})
    wrapper.find('img').trigger('click')
    console.log(wrapper.html())
    expect(toggleThemeMock).toHaveBeenCalled()
  })
  it('teste de snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

})
