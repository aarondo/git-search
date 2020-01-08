<template lang="html">
    <div>
        <p>{{activity.actor.login}} {{activity.payload.action}} a repository from an installation</p>
    </div>
</template>

<script>
export default {
  name: 'installation-repositories-event',
  props: ['activity']
}
</script>
