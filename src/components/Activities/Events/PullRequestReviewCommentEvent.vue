<template lang="html">
    <div>
        <p>{{activity.actor.login}} {{activity.payload.action}} a comment on a pull request's unified diff on repo <a :href="'https://github.com/'+activity.repo.name" target="_blank">{{activity.repo.name}}</a></p>
    </div>
</template>

<script>
export default {
  name: 'pull-request-review-comment-event',
  props: ['activity']
}
</script>
