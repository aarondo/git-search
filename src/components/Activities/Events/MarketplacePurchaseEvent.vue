<template lang="html">
    <div>
        <p>{{activity.actor.login}} performed the action {{activity.payload.action}} on their Github membership plan</p>
    </div>
</template>

<script>
export default {
  name: 'label-event',
  props: ['activity']
}
</script>
