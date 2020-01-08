<template>
  <div id="results" class="wrapper">
    
    <div id="meta">
        <h2>Top 30 most popular Github users in the UK</h2>
    </div>
        
    <div class="profiles" v-if="popularUsers">
        <user-list-item v-for="user in popularUsers" :user="user" :key="user.id"/>
    </div>
  
    <div class="profiles" v-else>
        <user-list-item-loading v-for="index in 20" :index="index" :key="index"/>
    </div>
      
  </div>
</template>

<script>
import UserListItem from "@/components/User/UserListItem.vue"
import UserListItemLoading from "@/components/Loaders/UserListItemLoading.vue"
export default {
  name: 'home',
  components: {UserListItem,UserListItemLoading},
  created: function(){
    
    //If popular Users is already in the store don't call again
    if (!this.popularUsers) {
        this.getPopularUsers();
    }
    
    document.title = 'Git Search'
  },
  computed: {
    popularUsers: function(){
      // Get the popular users from the store
      return this.$store.state.popularUsers.items
    }
  },
  methods: {
    getPopularUsers: function(){
        this.$store.dispatch('getPopularUsers');
    }
  }
}
</script>


<style lang="less">

#results{
  
  .profiles{
    display:flex;
    flex-wrap: wrap;
    margin-bottom:20px;
  }
  
  .pagination{
    float:right;
    margin-bottom:60px;
  }
  
}

</style>
