import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:3001`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default class EventService {

  static getEvents(): Promise<any> {
    return apiClient.get('/events')
  }

  static getEvent(id: string): Promise<any> {
    return apiClient.get(`/events/${id}`)
  }
}
