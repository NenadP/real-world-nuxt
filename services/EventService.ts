import axios from 'axios'

const apiClient = axios.create({
  // assumes running json-server --port 3001 --watch db.json
  // baseURL: `http://localhost:3001`,
  baseURL: `https://my-json-server.typicode.com/nenadp/real-world-nuxt`,
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
