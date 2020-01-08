<template lang="html">
    <div class="activities box">
        
      <h2>Recent Activity</h2>
      
      <div v-if="activities">
        <activity-item v-for="activity in activities" :activity="activity" :key="activity.id"/>
      </div>
      
      <div v-else>
        <list-item-loading v-for="index in 20" :key="index"/>
      </div>
      

      <p v-if="activities.length == 0">@{{profile.login}} has no recent activity.</p>
      
    </div>
</template>

<script>

import ActivityItem from '@/components/Activities/ActivityItem';
import ListItemLoading from '@/components/Loaders/ListItemLoading.vue'

export default {
  name: 'user-activity',
  components: {
    ActivityItem,
    ListItemLoading
  },
  props: ['profile'],
  created: function(){
    // Make call to get the current profiles activity
    this.$store.dispatch('getActivity',this.profile.login)
  },
  computed: {
    activities: function(){
      // Get the profiles activities from the store
      return this.$store.state.activeProfileActivity
    }
  }
}
</script>
