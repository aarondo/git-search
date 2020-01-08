import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import CheckRunEvent from '@/components/Activities/Events/CheckRunEvent.vue'


describe('CheckRunEvent.vue',function(){
  
    it('renders the correct data when passed activity',function(){
      
      var activity = {
        actor: {
          login: 'aarondo'
        },
        payload: {
          action: 'completed'
        }
      }
      
      var wrapper = shallowMount(CheckRunEvent, {
        propsData: { activity }
      })
      
      expect(wrapper.text()).to.include('aarondo completed a check run')
      
    })
  
})
