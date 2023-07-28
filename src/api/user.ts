import axios from 'axios'

export interface LoginParams {
  username?: string
  password?: string
}

export type LoginRes = User
export type LogoutRes = User

export async function userLogin(params: LoginParams) {
  const { data } = await axios.post<LoginRes>('/api/login', params)
  return data
}

export async function userLogout() {
  const { data } = await axios.post<LogoutRes>('/api/logout')
  return data
}
