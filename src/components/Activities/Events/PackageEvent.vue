<template lang="html">
    <div>
        <p>{{activity.package.name}} was {{activity.payload.action}}</p>
    </div>
</template>

<script>
export default {
  name: 'package-event',
  props: ['activity']
}
</script>
