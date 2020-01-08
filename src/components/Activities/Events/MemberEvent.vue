<template lang="html">
    <div>
        <p>{{activity.actor.login}} {{activity.payload.action}} a collaborator on the repository <a :href="'https://github.com/'+activity.repo.name" target="_blank">{{activity.repo.name}}</a></p>
    </div>
</template>

<script>
export default {
  name: 'member-event',
  props: ['activity']
}
</script>
