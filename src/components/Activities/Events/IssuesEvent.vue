<template lang="html">
    <div>
        <p>{{activity.actor.login}} made an issue event on repo <a :href="'https://github.com/'+activity.repo.name" target="_blank">{{activity.repo.name}}</a></p>
        
        <span class="badge">{{activity.payload.action}}</span>
    </div>
</template>

<script>
export default {
  name: 'issues-event',
  props: ['activity']
}
</script>
