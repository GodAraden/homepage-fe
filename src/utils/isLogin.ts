const isLoginKey = 'isLogin'

export function setLogin(value: string) {
  localStorage.setItem(isLoginKey, value)
}

export function isLogin() {
  return localStorage.getItem(isLoginKey) !== void 0
}

export function removeLogin() {
  localStorage.removeItem(isLoginKey)
}
