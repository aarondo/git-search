<template lang="html">
    <div>
        <p>{{activity.actor.login}} {{activity.payload.action}} a comment on an issue for repo <a :href="'https://github.com/'+activity.repo.name" target="_blank">{{activity.repo.name}}</a></p>
    </div>
</template>

<script>
export default {
  name: 'issues-event',
  props: ['activity']
}
</script>
