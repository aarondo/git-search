import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import UserListItem from '@/components/User/UserListItem.vue'


describe('UserListItem.vue',function(){
  
    it('renders the correct username when passed a user',function(){
      
      var user = {
          login: 'aarondo',
          avatar_url: 'https://avatars2.githubusercontent.com/u/3815991?v=4&s=48',
      }
      
      var wrapper = shallowMount(UserListItem, {
        propsData: { user },
        stubs: ['router-link', 'router-view']
      })
      
      expect(wrapper.text()).to.include('aarondo')
      
    })
  
})
