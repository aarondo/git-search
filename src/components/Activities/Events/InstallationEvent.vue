<template lang="html">
    <div>
        <p>{{activity.actor.login}} {{activity.payload.action}} permissions on a Github App</p>
    </div>
</template>

<script>
export default {
  name: 'installation-event',
  props: ['activity']
}
</script>
