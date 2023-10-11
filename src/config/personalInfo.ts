export const PersonalInfo: KeyValuePair<any>[] = [
  {
    key: 'nickname',
    value: import.meta.env.VITE_APP_OWNER
  },
  {
    key: 'age',
    value:
      new Date().getFullYear() - parseInt(import.meta.env.VITE_APP_OWNER_BIRTH)
  },
  {
    key: 'school',
    value: null
  },
  {
    key: 'direction',
    value: null
  },
  {
    key: 'like',
    value: null
  },
  {
    key: 'games',
    value: null
  },
  {
    key: 'singer',
    value: null
  },
  {
    key: 'email',
    value: 'me@araden.top'
  },
  {
    key: 'github',
    value: 'https://github.com/GodAraden'
  }
]
