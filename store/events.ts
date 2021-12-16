import EventService from '~/services/EventService'
export const state = () => ({
  events: [],
  event: {},
})

export const mutations = {
  setEvents(state: any, events: any) {
    state.events = events
  },
  setEvent(state: any, event: any) {
    state.event = event
  },
}

export const actions = {
  async fetchEvents({ commit }: any) {
    const response = await EventService.getEvents()
    commit('setEvents', response.data)
  },
  async fetchEvent({ commit }: any, id: any) {
    const response = await EventService.getEvent(id)
    commit('setEvent', response.data)
  },
}
