<template lang="html">
  <header class="userHeader box">
    
      <div class="left">
          <img width="150" class="avatar large" :src="profile.avatar_url+'&s=150'">
      </div>
      
      <div class="right">
    
        <h1><a target="_blank" :href="profile.html_url">@{{profile.login}}</a></h1>
        <p>{{profile.name}} 
          <span v-if="profile.location">from {{profile.location}}
          </span>
        </p>
        <p>{{profile.bio}}</p>  
        <p>Folowers {{profile.followers}} | Following {{profile.following}}</p>  
      </div>
    
  </header>
</template>

<script>
export default {
  name: 'user-header',
  props: ['profile']
}
</script>

<style lang="less">
.userHeader{
  display:flex;
  margin-bottom:20px;  
  .left{
    flex: 200px 0 0;
  }
  .right{
    flex:1;
    h1 a{
      text-decoration:none;
      color:@blue;
      &:hover{
        text-decoration:underline;
      }
    }
  }
  @media(max-width:@mob){
    display:block;
    text-align: center;
    .left,.right{
      flex: 100% 0 0;
    }
    .avatar{
      margin:0 auto;
      margin-bottom:20px;
    }
  }
}
</style>
