import axios from 'axios'

import containers from '@/api/containers'
import images from '@/api/images'
import system from '@/api/system'
import networks from '@/api/networks'
import volumes from '@/api/volumes'
import nodes from '@/api/nodes'
import events from '@/api/events'

const instance = axios.create({
  baseURL: process.env.API
})

instance.defaults.headers.common['Content-Type'] = 'application/json'
instance.defaults.headers.common['Accept'] = 'application/json'

instance.interceptors.response.use(
  undefined,
  err => {
    Promise.reject(err)
  }
)

const containersService = containers(instance)
const imagesService = images(instance)
const systemService = system(instance)
const networksService = networks(instance)
const volumesService = volumes(instance)
const nodesService = nodes(instance)
const eventsService = events(instance)

export {
  containersService,
  imagesService,
  systemService,
  networksService,
  volumesService,
  nodesService,
  eventsService
}
