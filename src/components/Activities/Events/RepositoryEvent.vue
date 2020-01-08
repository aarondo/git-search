<template lang="html">
    <div>
        <p>Repo <a :href="'https://github.com/'+activity.repo.name" target="_blank">{{activity.repo.name}}</a> has been {{activity.payload.action}}</p>
    </div>
</template>

<script>
export default {
  name: 'repository-event',
  props: ['activity']
}
</script>
