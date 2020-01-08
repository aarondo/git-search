<template lang="html">
  <div class="profile">
    <div class="flexItem">
      
        <user-header-loading />
        
        <div class="repos box">  
          <h2>Public Repos</h2>    
          <list-item-loading v-for="index in 20" :key="index"/>    
        </div>
        
    </div>
    
    <div class="flexItem">
      
          <div class="activities box">
              <h2>Recent Activity</h2>
              <list-item-loading v-for="index in 20" :key="index"/>
          </div>
          
    </div>
  </div>
</template>

<script>
import UserHeaderLoading from '@/components/Loaders/UserHeaderLoading.vue'
import ListItemLoading from '@/components/Loaders/ListItemLoading.vue'
export default {
  name: 'profileLoading',
  components: {UserHeaderLoading, ListItemLoading}
}
</script>

