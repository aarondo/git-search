<template lang="html">
    <div>
        <p>{{activity.actor.login}} pushed to <a :href="'https://github.com/'+activity.repo.name" target="_blank">{{activity.repo.name}}</a></p>
    </div>
</template>

<script>
export default {
  name: 'push-event',
  props: ['activity']
}
</script>
