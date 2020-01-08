<template lang="html">
    <div>
        <p>The orgnisation {{activity.payload.organization.login}} had an action taken against it</p>
        
        <span class="badge">{{activity.payload.action}}</span>
    </div>
</template>

<script>
export default {
  name: 'organisation-event',
  props: ['activity']
}
</script>
