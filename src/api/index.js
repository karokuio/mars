import axios from 'axios'

import containers from '@/api/containers'
import images from '@/api/images'

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

export {
  containersService,
  imagesService
}
