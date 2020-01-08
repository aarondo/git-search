<template lang="html">
    <div>
        <p>A new event has occured on team {{activity.payload.team.name}}</p>
        <span class="badge">Action: {{activity.payload.action}}</span>
    </div>
</template>

<script>
export default {
  name: 'team-event',
  props: ['activity']
}
</script>
