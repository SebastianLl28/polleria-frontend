import { baseApi } from '@/api/baseApi'

interface ILogin {
  email: string
  password: string
}
export const postLogin = async ({ email, password }: ILogin) => {
  return await baseApi.post('auth/login', { email, password }).then(res => res.data)
}
