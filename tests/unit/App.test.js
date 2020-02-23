//import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from './App.vue'

describe('test App', () => {
  
  it ('render p tag', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.find('p').text().equal('Users'))
  })

})