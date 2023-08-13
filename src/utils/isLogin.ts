const isLoginKey = 'isLogin'

export function setLogin(value: string) {
  localStorage.setItem(isLoginKey, value)
}

export function isLogin() {
  return !!localStorage.getItem(isLoginKey)
}

export function removeLogin() {
  localStorage.removeItem(isLoginKey)
}
