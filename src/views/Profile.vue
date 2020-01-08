<template>
  <div class="wrapper">
    
    <div class="profile" v-if="profile">
      
      <div class="flexItem">
        <user-header :profile="profile"/>
        <user-activity :profile="profile"/>
      </div>
      
      <div class="flexItem">
          <user-repos :profile="profile"/>
      </div>
    </div>
    
    <div v-else>
      <profile-loading />
    </div>
    
  </div>
</template>

<script>
import UserHeader from '@/components/User/UserHeader'
import UserRepos from '@/components/User/UserRepos'
import UserActivity from '@/components/User/UserActivity'
import ProfileLoading from '@/components/Loaders/ProfileLoading'

export default {
  name: 'home',
  components: {UserHeader, UserRepos, UserActivity, ProfileLoading},
  watch: {
    'profile': function(){
      //Watch for profile updates to then update the page title
      document.title = this.profile.login
    }
  },
  created: function(){
    // On creation get the users profile from the URL
    this.$store.dispatch('getProfile',this.$route.params.profile);
  },
  data: function(){
    return {
      reposOpen: true
    }
  },
  computed: {
    profile : function(){
      // Get the currently active profile from the store
      return this.$store.state.activeProfile
    }
  }
}
</script>


<style lang="less">
.profile{
  margin-bottom:100px;
  display:flex;
  .flexItem{
    flex:1;
    &:first-of-type{
      margin-right:20px;
    }
  }
  
  @media(max-width:@mob){
    display:block;
    
    .flexItem{
      margin-bottom:20px;
      &:first-of-type{
          margin-right:0px;  
      }
    }
  }
}
</style>
