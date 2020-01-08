<template lang="html">
    <div>
        <p>{{activity.actor.login}} {{activity.payload.pages[0].action}} a Wiki page titled {{activity.payload.pages[0].title}}</p>
    </div>
</template>

<script>
export default {
  name: 'gollum-event',
  props: ['activity']
}
</script>
