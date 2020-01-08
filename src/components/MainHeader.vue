<template lang="html">
  <header id="mainHeader">
    
  
      
          <div class="centerBox">
            
              <h1 id="logo">
                <router-link to="/">
                  <img src="/img/logo.svg" alt="Git Search">
                  Git Search</router-link>
              </h1>
              <p>Discover, search and explore the best software engineers on Github.</p>
          
              <form @submit.prevent="searchUsers">
                <input v-model.trim="searchTerm" type="search" placeholder="Search users then hit enter...">
              </form>
          
          </div>
        

    
  </header>
</template>

<script>
export default {
  name: 'main-header',
  data: function(){
    return {
        searchTerm: ""
    }
  },
  methods: {
    searchUsers: function(){
      
      if (this.searchTerm == "") { return false; }
      
      
      this.$router.replace({
        name: 'search',
        params: {
          page: "1"
        },
        query: {
          q: this.searchTerm
        }
      });
      
    }
  }
}
</script>

<style lang="less">
#mainHeader{
  height:250px;
  background:white;
  border-bottom:1px solid @border;
  display:flex;
  align-items: center;
  justify-content: center;
  margin-bottom:60px;
  #logo a{
    text-decoration:none;
    color:@blue;
    position:relative;
    padding-left:45px;
    img{
      position:absolute;
      width:35px;
      left:0px;
      top:5px;
    }
  }
  .centerBox{
    text-align: center;
    max-width:90%;
  }
  
  @media(max-width:@mob){
    margin-bottom:20px;
  }
}
</style>
