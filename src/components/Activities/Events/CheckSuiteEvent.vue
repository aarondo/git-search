<template lang="html">
    <div>
        <p>{{activity.actor.login}} {{activity.payload.action}} a check suite</p>
    </div>
</template>

<script>
export default {
  name: 'check-suite-event',
  props: ['activity']
}
</script>
