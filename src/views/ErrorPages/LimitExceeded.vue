<template>
  <div id="errorPage" class="wrapper mini box">
    <h1>API Limit Exceeded</h1>
    <p>The Github API limit has been reached. This means we can't connect to Github until your limit has been reset.</p>
    
    <p>This will reset at <span class="badge">{{time}}</span></p>
  </div>
</template>

<script>
var moment = require('moment');
export default {
  name: 'LimitExceeded',
  computed: {
    time: function(){
      //Format time to show in user friendly format
      return moment.unix(this.$route.params.time).format("HH:mm:ss")
    }
  }
}
</script>
