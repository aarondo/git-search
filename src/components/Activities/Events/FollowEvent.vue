<template lang="html">
    <div>
        <p>{{activity.actor.login}} followed another member</p>
    </div>
</template>

<script>
export default {
  name: 'follow-event',
  props: ['activity']
}
</script>
