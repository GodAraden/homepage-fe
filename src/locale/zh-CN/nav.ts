import { parseConstantToI18n } from '@/utils/parseNavs'
import { navigations } from '@/config/navigation'

export default {
  navigation: { ...parseConstantToI18n(navigations, 'zhCN') }
}
