import { ref } from 'vue'
import { defineStore } from 'pinia'
import { userLogin, LoginParams, userLogout } from '@/api/user'
import { setLogin, removeLogin } from '@/utils/isLogin'

// 状态存储，用于识别用户是否登陆
export const useUserStore = defineStore('user', () => {
  const user = ref<User>({})

  const login = async (loginForm: LoginParams) => {
    const data = await userLogin(loginForm)
    if (!data?.role) return false
    user.value = data
    setLogin(user.value.role)
    return true
  }

  const logout = async () => {
    await userLogout()
    user.value = {}
    removeLogin()
  }

  return { user, login, logout }
})
