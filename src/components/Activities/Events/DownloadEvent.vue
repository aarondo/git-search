<template lang="html">
    <div>
        <p>A new download for {{activity.payload.download.name}} has just occured</p>
    </div>
</template>

<script>
export default {
  name: 'download-event',
  props: ['activity']
}
</script>
