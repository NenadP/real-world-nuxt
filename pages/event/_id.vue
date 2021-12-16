<template>
<div>
  <h1>{{ event.title }}</h1>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import MetaInfo from 'vue-meta';
import { Context } from '@nuxt/types'
import EventService from '@/services/EventService';

export default Vue.extend({
  name: 'EventId',
  data() {
    return {
      event: {
        title: ''
      },
    };
  },
  head(): MetaInfo {
    return {
      title: this.event.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'What you need to know about ' + this.event.title
        }
      ]
    }
  },
  async asyncData(ctx: Context): Promise<any> {
    try {
      const response = await EventService.getEvent(ctx.params.id);
      return {
        event: response.data
      }
    } catch (error) {
      ctx.error({ statusCode: 404, message: 'Event not found' })
    }
  }
});
</script>

<style scoped>

</style>
