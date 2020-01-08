<template lang="html">
    <div>
        <p>{{activity.actor.login}} {{activity.payload.action}} a deploy key to repo <a :href="'https://github.com/'+activity.repo.name" target="_blank">{{activity.repo.name}}</a></p>
    </div>
</template>

<script>
export default {
  name: 'deploy-key-event',
  props: ['activity']
}
</script>
