<template lang="html">
    <div>
        <p>Repo <a :href="'https://github.com/'+activity.repo.name" target="_blank">{{activity.repo.name}}</a> import status has been updated</p>
        <span class="badge">Status: {{activity.payload.status}}</span>
    </div>
</template>

<script>
export default {
  name: 'repository-import-event',
  props: ['activity']
}
</script>
