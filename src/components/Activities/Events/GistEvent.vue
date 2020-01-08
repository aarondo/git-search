<template lang="html">
    <div>
        <p>{{activity.actor.login}} {{activity.payload.action}}d a gist</p>
    </div>
</template>

<script>
export default {
  name: 'gist-event',
  props: ['activity']
}
</script>
