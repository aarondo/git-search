<template lang="html">
    <div>
        <p>{{activity.package.name}} has {{activity.payload.action}} a project</p>
    </div>
</template>

<script>
export default {
  name: 'project-event',
  props: ['activity']
}
</script>
