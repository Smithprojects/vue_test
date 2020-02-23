import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
//import HelloWorld from '@/components/UsersTable.vue'
import App from '../../src/App.vue'

describe('App.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Users'
    const wrapper = shallowMount(App, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
    //console.log(wrapper.vm)
    
  })

  it ('render p tag', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.find('p').text()).equal('Users')
  })
})


