<template lang="html">
    <div>
        <p>A star on repo <a :href="'https://github.com/'+activity.repo.name" target="_blank">{{activity.repo.name}}</a> has been {{activity.payload.action}}</p>
    </div>
</template>

<script>
export default {
  name: 'star-event',
  props: ['activity']
}
</script>
