<template lang="html">
    <div>
    
        <p>{{activity.actor.login}} made a pull request event on repo <a :href="'https://github.com/'+activity.repo.name" target="_blank">{{activity.repo.name}}</a></p>
        
        <span class="badge">{{activity.payload.action}}</span>
    </div>
</template>

<script>
export default {
  name: 'pull-request-event',
  props: ['activity']
}
</script>
