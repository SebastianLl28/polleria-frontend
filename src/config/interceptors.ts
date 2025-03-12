import { baseApi } from '@/api/baseApi'

export const authInterceptor = () =>
  baseApi.interceptors.request.use(
    config => {
      const token = localStorage.getItem('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    error => Promise.reject(error)
  )
