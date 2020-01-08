<template lang="html">
    <div>
        <p>{{activity.actor.login}} {{activity.payload.action}} a release</p>
    </div>
</template>

<script>
export default {
  name: 'release-event',
  props: ['activity']
}
</script>
