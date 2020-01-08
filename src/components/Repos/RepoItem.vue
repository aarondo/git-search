<template lang="html">
  <div class="repo">
  
          <h3 class="nm"><a target="_blank" :href="repo.html_url">{{repo.name}}</a></h3>
          
          <p>{{repo.description}}</p>
          
          <p><star-icon class="icon"/> x{{repo.stargazers_count}} <eye-icon class="icon"/> x{{repo.watchers_count}}</p>
  </div>
</template>

<script>
import { StarIcon, EyeIcon } from 'vue-feather-icons'
export default {
  name: 'repo-item',
  props: ['repo'],
  components: {StarIcon, EyeIcon}
}
</script>

<style lang="less" scoped>
.repo{
  border-bottom:1px solid @border;
  margin-bottom:20px;
  &:last-of-type{
    border-bottom:0px;
  }
  a{
    color:@blue;
    text-decoration:none;
    &:hover{
      text-decoration:underline;
    }
  }
  .icon{
    width: 20px;
    vertical-align: bottom;
    margin-right:5px;
    &:first-of-type{
      color:@yellow;
    }
    &:last-of-type{
      color:@blue;
      margin-left:20px;
    }
  }
}
</style>
