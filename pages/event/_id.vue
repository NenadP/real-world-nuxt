<template>
<div>
  <h1>Event #{{ id }}</h1>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import MetaInfo from 'vue-meta';

export default Vue.extend({
  name: 'EventId',
  head(): MetaInfo {
    return {
      title: 'Event #' + this.id,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'What you need to know about Event #' + this.id
        }
      ]
    }
  },
  computed: {
    id(): string {
      return this.$route.params.id
    }
  }
});
</script>

<style scoped>

</style>
