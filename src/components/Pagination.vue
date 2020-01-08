<template lang="html">
    <ul class="pagination">
      <li>Page {{page}} of 
        <i v-if="lastPage">{{lastPage}}</i>
        <i v-else>{{page}}</i>
      </li>
      <li v-if="page != 1"><router-link :to="{ name: 'search', params: {page:prev}, query: {q:$route.query.q} }">Prev</router-link></li>
      <li v-if="lastPage"><router-link :to="{ name: 'search', params: {page:next}, query: {q:$route.query.q} }">Next</router-link></li>
    </ul>
</template>

<script>
export default {
  name: 'pagination',
  computed: {
    page: function(){
      return this.$route.params.page;
    },
    next: function(){
      return parseInt(this.page) + 1;
    },
    prev: function(){
      return parseInt(this.page) - 1;
    },
    lastPage: function(){
      //If last page link is returned in the headers from github API then return the total number of pages
      return (this.$store.state.searchResults && this.$store.state.searchResults.links &&  this.$store.state.searchResults.links.last) ? this.$store.state.searchResults.links.last.page : false 
    }
  }
}
</script>

<style lang="less" scoped>
.pagination{
  li{
    display:inline-block;
    margin-right:20px;
    a{
      text-decoration:none;
      color:@blue;
      font-weight:bold;
      &:hover{
        color:darken(@blue,20)
      }
    }
  }
}
</style>
