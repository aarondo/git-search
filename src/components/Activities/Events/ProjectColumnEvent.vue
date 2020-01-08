<template lang="html">
    <div>
        <p>{{activity.package.name}} has {{activity.payload.action}} a column on a project card</p>
    </div>
</template>

<script>
export default {
  name: 'project-column-event',
  props: ['activity']
}
</script>
