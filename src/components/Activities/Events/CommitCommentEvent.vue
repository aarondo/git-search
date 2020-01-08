<template lang="html">
    <div>
        <p>{{activity.actor.login}} created a comment on a commit on repo <a :href="'https://github.com/'+activity.repo.name" target="_blank">{{activity.repo.name}}</a></p>
    </div>
</template>

<script>
export default {
  name: 'commit-comment-event',
  props: ['activity']
}
</script>
