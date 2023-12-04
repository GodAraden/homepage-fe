export const FriendLinks: FriendLink[] = [
  {
    title: `${import.meta.env.VITE_APP_OWNER} 的主页`,
    description: import.meta.env.VITE_SIGNATURE_ZH,
    logo: '/avatar.jpg',
    link: import.meta.env.VITE_APP_OWNER_LINK,
    color: import.meta.env.VITE_APP_OWNER_COLOR
  },
  {
    title: '猫猫虫的后花园',
    description: '一个亦正亦邪的猫猫虫的个人网站',
    logo: 'https://raw.githubusercontent.com/mlhiter/typora-images/master/blog-picture.jpg',
    link: 'https://www.mlhiter.top/',
    color: 'rgba(255, 255, 255, 0.1)'
  }
]
