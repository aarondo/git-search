import Vue from 'vue'
import Vuex from 'vuex'
var parseHeaderLinks = require('parse-link-header');

Vue.use(Vuex)

// All ajax calls are called centrally in this file and responses kept in the store

export default new Vuex.Store({
  state: {
    activeProfile: false,
    activeProfileRepos: {
      items: false,
      links: false
    },
    activeProfileActivity: false,
    searchResults: false,
    popularUsers: false
  },
  mutations: {
    getPopularUsers: function(state,users){
      state.popularUsers = users;
    },
    getProfile: function(state,profile){
      state.activeProfile = profile;
    },
    clearProfile: function(state){
      state.activeProfile = false
    },
    getRepos: function(state,$data){
      
      // If the first page of repos create new array else append to existing array
      if ($data.page == 1) {
          state.activeProfileRepos.items = $data.response.data;  
      } else {
        state.activeProfileRepos.items = state.activeProfileRepos.items.concat($data.response.data);
      }
      
      var links = parseHeaderLinks($data.response.headers.link);
      state.activeProfileRepos.links = links;
      
    },  
    clearRepos: function(state){
      state.activeProfileRepos = {
        items: false,
        links: false
      }
    },
    getActivity: function(state,activity){
      state.activeProfileActivity = activity
    },
    clearActivity: function(state){
      state.activeProfileActivity = false
    },
    searchUsers: function(state,profiles){
      
      state.searchResults = profiles.data;
      
      var links = parseHeaderLinks(profiles.headers.link);
      state.searchResults.links = links;
      
    },
    clearSearchUsers: function(state){
      state.searchResults = false;
    }
  },
  actions: {
    getPopularUsers: function(context){
      
      window.axios.get('/search/users?sort=stars&q=location:uk&order=asc').then(function(response){    
        context.commit('getPopularUsers',response.data);
      });
      
    },
    searchUsers: function(context,$data){
      
      context.commit('clearSearchUsers');
      
      window.axios.get('/search/users?q='+$data.username+'&page='+$data.page).then(function(response){  
        context.commit('searchUsers',response);
      });
      
    },
    getProfile: function(context,username){

      context.commit('clearProfile');
      window.axios.get('/users/'+username).then(function(response){
            context.commit('getProfile',response.data);  
      });
      
    },
    getRepos: function(context,$data){

      if ($data.page == 1) { context.commit('clearRepos'); }

      
      window.axios.get('/users/'+$data.username+'/repos?page='+$data.page).then(function(response){
            context.commit('getRepos',{response:response,page:$data.page});        
      });
      
    },
    getActivity: function(context,username){

      context.commit('clearActivity');
      
      window.axios.get('/users/'+username+'/events').then(function(response){
            context.commit('getActivity',response.data);
      });
      
    }
  }
})
