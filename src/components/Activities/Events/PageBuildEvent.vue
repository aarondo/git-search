<template lang="html">
    <div>
        <p>{{activity.package.name}} pushed to Github pages</p>
    </div>
</template>

<script>
export default {
  name: 'page-build-event',
  props: ['activity']
}
</script>
