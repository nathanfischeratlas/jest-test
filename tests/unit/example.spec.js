import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import router from '@/router'
import HelloWorld from '@/components/HelloWorld.vue'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

const localVue = createLocalVue()

describe('All tests', () => {
  it('Renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })

    expect(wrapper.text()).toMatch(msg)
  })

  it('HelloWorld rendered correctly', () => {
    const wrapper = shallowMount(HelloWorld)

    expect(wrapper.exists()).toBe(true)
  })

  it('Snapshot HelloWorld', () => {
    const wrapper = mount(HelloWorld)

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('HelloWorld renders with the correct class', () => {
    const wrapper = mount(HelloWorld)

    expect(wrapper.classes()).toContain('hello')
  })

  it('Click on first button', async () => {
    const wrapper = mount(HelloWorld)
    await wrapper.find('#button').trigger('click')

    expect(wrapper.vm.functionCalled).toBe(true)
  })

  it('Emits an custom event when second button is clicked', async () => {
    const wrapper = mount(HelloWorld)
    await wrapper.find('#buttonEvent').trigger('click')

    expect(wrapper.emitted().buttonClick).toBeTruthy()
  })

  it('Renders the correct button text', () => {
    const wrapper = mount(HelloWorld)

    expect(wrapper.find('#buttonEvent').text()).toBe('Custom Event')
  })

  it('Check if renders two buttons', () => {
    const wrapper = mount(HelloWorld)
    const buttons = wrapper.findAll('button')

    expect(buttons.length).toBe(2)
  })

  it('Route navigation occurs correctly', async () => {
    const wrapper = mount(HomeView, {
      localVue,
      router
    })
    await wrapper.vm.$router.push('/about')

    expect(wrapper.vm.$route.path).toBe('/about')
  })

  it('Description is changed correctly', async () => {
    const wrapper = mount(AboutView)
    await wrapper.setData({ description: 'This is an about page' })

    expect(wrapper.vm.description).toBe('This is an about page')
  })
})
