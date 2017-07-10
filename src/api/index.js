import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.API
})

instance.defaults.headers.common['Content-Type'] = 'application/json'
instance.defaults.headers.common['Accept'] = 'application/json'
instance.defaults.headers.common['x-disable-pagination'] = true

instance.interceptors.response.use(
  undefined,
  err => {
    Promise.reject(err)
  }
)

const setToken = token => {
  instance.defaults.headers.common['Authorization'] = `Application ${token}`
}
