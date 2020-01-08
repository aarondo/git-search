<template lang="html">
  <router-link class="userCard box" :to="'/'+user.login">
    <img class="avatar center" width="48" :src="user.avatar_url+'&s=48'">
      <h3>{{user.login}}</h3>
  </router-link>
</template>

<script>
export default {
  name: 'user-list-item',
  props: ['user']
}
</script>

<style lang="less">

.userCard{
  flex:0 0 ~"calc(33.33% - 20px)";
  margin:10px;
  text-align: center;
  text-decoration:none;
  color:@lightSilver;
  text-transform:capitalize;
  cursor:pointer;
  font-size:1.2rem;
  transition: transform .2s ease-in-out;
  &:hover{
    border-color:@blue;
    box-shadow:0px 4px 3px 5px fade(@blue,10);
    color:@blue;
    transform:translateY(-4px);
  }
  
  @media(max-width:@mob){
    flex:0 0 100%;
    margin:0px;
    margin-bottom:20px;
  }
}

</style>
