<template>
  <div>
    <h1>Events</h1>
    <event-card v-for='event in events' :event='event' :key='event.id'></event-card>
  </div>

</template>

<script lang='ts'>

import { Context } from '@nuxt/types'
import EventCard from '~/components/EventCard.vue'
import EventService from '@/services/EventService'

export default {
  data() {
    return {
      events: []
    }
  },
  components: { EventCard },
  head() {
    return {
      title: 'Event Listing',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Where you can find all events taking place in your neighborhood.'
        }
      ]
    }
  },
  asyncData(ctx: Context): Promise<object> | object {
    // assumes running json-server --port 3001 --watch db.json
    return EventService.getEvents()
      .then(response => {
        return {
          events: response.data
        }
      })
      .catch(error => {
        ctx.error({ statusCode: 500, message: error.message })
      })
  }
}
</script>
