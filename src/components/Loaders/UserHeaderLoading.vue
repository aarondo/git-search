<template lang="html">
  <header class="userHeader box">
    
      <div class="left">
          <span class="avatar large"></span>
      </div>
      
      <div class="right">
        <h1><span class="placeholder large"></span></h1>
        <p><span class="placeholder"></span></p>
        <p><span class="placeholder"></span></p>  
        <p><span class="placeholder"></span></p>  
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
</style>
