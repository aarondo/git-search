<template lang="html">
    <div>
        <p>{{activity.actor.login}} {{activity.payload.action}} a check run</p>
    </div>
</template>

<script>
export default {
  name: 'check-run-event',
  props: ['activity']
}
</script>
