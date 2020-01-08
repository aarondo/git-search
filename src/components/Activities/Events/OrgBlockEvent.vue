<template lang="html">
    <div>
        <p>The orgnisation {{activity.payload.organization.login}} {{activity.payload.action}} a user</p>
    </div>
</template>

<script>
export default {
  name: 'org-block-event',
  props: ['activity']
}
</script>
