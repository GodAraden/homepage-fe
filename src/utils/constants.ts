interface KeyValuePair<Value = string> {
  key: string
  value: Value
}

export const PersonalInfo: KeyValuePair<any>[] = [
  {
    key: 'nickname',
    value: 'GodAraden'
  },
  {
    key: 'age',
    value: new Date().getFullYear() - 2003
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
    key: 'from',
    value: null
  },
  {
    key: 'nowAt',
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
    value: 'hitwh_gyh@qq.com'
  },
  {
    key: 'github',
    value: 'https://github.com/GodAraden'
  }
]

export const TechStack: KeyValuePair[] = [
  {
    key: 'html',
    value: 'HTML'
  },
  {
    key: 'css',
    value: 'CSS'
  },
  {
    key: 'typescript',
    value: 'TypeScript'
  },
  {
    key: 'javascript',
    value: 'JavaScript'
  },
  {
    key: 'sass',
    value: 'Sass'
  },
  {
    key: 'django',
    value: 'Django'
  },
  {
    key: 'prisma',
    value: 'Prisma'
  },
  {
    key: 'nestjs',
    value: 'NestJS'
  },
  {
    key: 'socket.io',
    value: 'Socket.io'
  },
  {
    key: 'tailwindcss',
    value: 'tailwindcss'
  },
  {
    key: 'git',
    value: 'git'
  },
  {
    key: 'vue',
    value: 'Vue.js'
  },
  {
    key: 'vite',
    value: 'vite'
  },
  {
    key: 'webpack',
    value: 'Webpack'
  },
  {
    key: 'nuxt',
    value: 'Nuxt'
  },
  {
    key: 'pinia',
    value: 'pinia'
  },
  {
    key: 'vueuse',
    value: 'VueUse'
  },
  {
    key: 'react',
    value: 'React.js'
  }
]

export const SkillProficiency: (KeyValuePair<number> & { color: string })[] = [
  {
    key: 'engineering',
    value: 0.78,
    color: '#df4331'
  },
  {
    key: 'ecosystem',
    value: 0.88,
    color: '#2fa278'
  },
  {
    key: 'frontend',
    value: 0.95,
    color: '#50a2cb'
  },
  {
    key: 'backend',
    value: 0.65,
    color: '#479001'
  },
  {
    key: 'abutment',
    value: 0.8,
    color: '#ffaa31'
  }
]
