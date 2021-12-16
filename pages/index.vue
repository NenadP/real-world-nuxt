<template>
  <div>
    <h1>Events</h1>
    <event-card v-for='event in events' :event='event' :key='event.id'></event-card>
  </div>

</template>

<script lang='ts'>

import { Context } from '@nuxt/types'
import { mapState } from 'vuex'
import EventCard from '~/components/EventCard.vue'

export default {
  components: { EventCard },
  fetch(ctx: Context): Promise<object> | void {
    try {
      return ctx.store.dispatch('events/fetchEvents');
    } catch (err) {
      return ctx.error({ statusCode: 500, message: err.message })
    }
  },
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

  computed: mapState({
    events: (state: any) => state.events.events
  })
}
</script>
