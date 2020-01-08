<template lang="html">
    <div>
        <p>{{activity.actor.login}} made the repo <a :href="'https://github.com/'+activity.repo.name" target="_blank">{{activity.repo.name}}</a> public</p>
    </div>
</template>

<script>
export default {
  name: 'public-event',
  props: ['activity']
}
</script>
