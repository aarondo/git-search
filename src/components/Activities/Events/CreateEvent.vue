<template lang="html">
    <div>
        <p>{{activity.actor.login}} created a {{activity.payload.ref_type}} on repo <a :href="'https://github.com/'+activity.repo.name" target="_blank">{{activity.repo.name}}</a></p>
    </div>
</template>

<script>
export default {
  name: 'create-event',
  props: ['activity']
}
</script>
