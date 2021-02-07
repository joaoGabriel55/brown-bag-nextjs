import axios, { AxiosInstance } from 'axios'
import { BASE_API } from '../shared/constants'

const API: AxiosInstance = axios.create({
  baseURL: BASE_API
})

API.interceptors.request.use(function (config) {
  return config
}, function (error) {
  console.log(error)
  return Promise.reject(error)
})

API.interceptors.response.use(function (response) {
  return response
}, function (error) {
  console.log(error.response)
  if (error.response && error.response.status === 500) {
    return API.request(error.config)
  }
  return Promise.reject(error)
})

export { API }