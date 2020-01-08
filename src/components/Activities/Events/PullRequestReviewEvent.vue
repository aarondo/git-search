<template lang="html">
    <div>
        <p>{{activity.package.name}} has {{activity.payload.action}} a pull request on repo <a :href="'https://github.com/'+activity.repo.name" target="_blank">{{activity.repo.name}}</a></p>
    </div>
</template>

<script>
export default {
  name: 'pull-request-review-event',
  props: ['activity']
}
</script>
