<template lang="html">
    <div class="repos box">
        
      <h2>Public Repositories</h2>
    
      <div class="repoList" v-if="repos">
        
          <repo-item v-for="repo in repos" :repo="repo" :key="repo.id"/>
          
          <p v-if="repos.length == 0">@{{profile.login}} has no repositories.</p>
          
          <button v-if="nextLink" :disabled="loading" class="loadMore" @click.prevent="loadMore" type="button" name="button">{{(loading) ? 'Please wait...': 'Load more'}}</button>
      
      </div>
      
      <div class="repoList" v-else>
          <list-item-loading v-for="index in 20" :key="index"/>
      </div>
      
    </div>
</template>

<script>
import RepoItem from '@/components/Repos/RepoItem.vue'
import ListItemLoading from '@/components/Loaders/ListItemLoading.vue'
export default {
  name: 'user-repos',
  props: ['profile'],
  components: {RepoItem, ListItemLoading},
  watch: {
    'repos': function(){
      this.loading = false
    }
  },
  mounted: function(){
    // Make the call to get the current profiles repos
    this.$store.dispatch('getRepos',{
      username: this.profile.login,
      page: this.page
    })
  },
  data: function(){
    return {
      page: 1,
      loading: false
    }
  },
  computed: {
    repos: function(){
      // Get the search current profiles repos from the store
      return this.$store.state.activeProfileRepos.items
    },
    nextLink: function(){
      //If next Link is returned in the headers from github API then return the link
      if (this.$store.state.activeProfileRepos.links && this.$store.state.activeProfileRepos.links.next) {
        return this.$store.state.activeProfileRepos.links.next;  
      }
      return false;
      
    }
  },
  methods: {
    loadMore: function(){
      this.loading = true;
      this.page++;
      this.$store.dispatch('getRepos',{
        username: this.profile.login,
        page: this.page
      })
    }
  }
}
</script>

<style lang="less">

</style>
