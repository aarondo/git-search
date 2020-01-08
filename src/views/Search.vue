<template>
  <div id="results" class="wrapper">
    
        <div id="meta">
            <h2 v-if="!users">Searching for {{$route.query.q}}...</h2>
            <h2 v-else>{{userCount}} users found for "{{$route.query.q}}"</h2>
        </div>
      
        <div class="profiles" v-if="users">
            <user-list-item v-for="user in users" :user="user" :key="user.id"/>
        </div>
      
        <div class="profiles" v-else>
            <user-list-item-loading v-for="index in 20" :index="index" :key="index"/>
        </div>
      
        <pagination v-if="users && users.length" />
  </div>
</template>

<script>
import UserListItem from "@/components/User/UserListItem.vue"
import UserListItemLoading from "@/components/Loaders/UserListItemLoading.vue"
import pagination from "@/components/Pagination.vue"

export default {
  name: 'search',
  components: {UserListItem, UserListItemLoading, pagination},
  watch: {
    '$route' : function(){
      // Watch for route query param changes. On change search users again
      this.searchUsers();
    }
  },
  created: function(){
    //On page created search Users
    this.searchUsers();
    
    //Update page Title
    document.title = 'Search'
  },
  computed: {
    users: function(){
      // Get the search Results from the store
      return this.$store.state.searchResults.items
    },
    userCount: function(){
      // Get the search Results count from the store
      return this.$store.state.searchResults.total_count
    }
  },
  methods: {
    searchUsers: function(){
      // If no search query parameter in the URL then redirect home 
      if (this.$route.query.q) {
        this.$store.dispatch('searchUsers', {
          page: this.$route.params.page,
          username: this.$route.query.q
        });
      } else {
        //If no query param set send user to homepage
        this.$router.push('/');
      }
      
    }
  }
}
</script>
