<template lang="html">
    <div>
        <p>{{activity.actor.login}} forked <a :href="'https://github.com/'+activity.repo.name" target="_blank">{{activity.repo.name}}</a></p>
    </div>
</template>

<script>
export default {
  name: 'fork-event',
  props: ['activity']
}
</script>
