<template lang="html">
    <div>
        <p>A security advisory has been {{activity.payload.action}}</p>
    </div>
</template>

<script>
export default {
  name: 'security-advisory-event',
  props: ['activity']
}
</script>
