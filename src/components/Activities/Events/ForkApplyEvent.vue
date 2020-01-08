<template lang="html">
    <div>
        <p>{{activity.actor.login}} applied a patch to a fork queue</p>
    </div>
</template>

<script>
export default {
  name: 'fork-apply-event',
  props: ['activity']
}
</script>
