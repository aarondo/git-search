<template lang="html">
    <div>
        <p>{{activity.package.name}} {{activity.payload.action}} a project card</p>
    </div>
</template>

<script>
export default {
  name: 'project-card-event',
  props: ['activity']
}
</script>
