import { ConstantWithI18n } from '@/config/navigation'

/**
 * 因为把变量的 i18n 映射放在locale文件夹中很麻烦，改来改去得动一堆文件
 * 因此就都放在了 settings 文件中，统一修改
 * 通过本函数可以将原类型转换成 i18n 映射需要的格式
 */
export function parseConstantToI18n(
  constants: ConstantWithI18n[],
  locale: 'zhCN' | 'enUS'
) {
  let res: Record<string, any> = {}
  for (const item of constants) {
    res[item.key] = {
      ...item[locale],
      ...(item.children ? parseConstantToI18n(item.children, locale) : {})
    }
  }
  return res
}
