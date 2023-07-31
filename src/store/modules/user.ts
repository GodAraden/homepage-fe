import { ref } from 'vue'
import { defineStore } from 'pinia'
import { userLogin, LoginParams, userLogout } from '@/api/user'

// 状态存储，用于识别用户是否登陆
export const useUserStore = defineStore('user', () => {
  const user = ref<User>({})

  const login = async (loginForm: LoginParams) => {
    const data = await userLogin(loginForm)
    if (!data) return
    user.value = data
  }

  const logout = async () => {
    await userLogout()
    user.value = {}
  }

  return { user, login, logout }
})
