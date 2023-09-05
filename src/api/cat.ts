import axios from 'axios'

interface CatBread {
  weight: {
    imperial: string
    metric: string
  }
  id: string
  name: string
  temperament: string
  origin: string
  country_codes: string
  country_code: string
  description: string
  life_span: string
  indoor: number
  alt_names: string
  adaptability: number
  affection_level: number
  child_friendly: number
  dog_friendly: number
  energy_level: number
  grooming: number
  health_issues: number
  intelligence: number
  shedding_level: number
  social_needs: number
  stranger_friendly: number
  vocalisation: number
  experimental: number
  hairless: number
  natural: number
  rare: number
  rex: number
  suppressed_tail: number
  short_legs: number
  wikipedia_url: string
  hypoallergenic: number
  reference_image_id: string
}

export type CatListItem = {
  breads: CatBread[]
  id: string
  url: string
  width: number
  height: number
}

const failedImg = {
  breads: [],
  id: 'failed',
  url: '/failed.jpg',
  width: 474,
  height: 296
}

export function getCatList(count: number): Promise<CatListItem[]> {
  return new Promise(async (resolve, reject) => {
    try {
      // 自己的前后端统一了响应格式与处理模式，换到第三方 API 还得迁就一下
      const data = (await axios.get('/cat/images/search', {
        withCredentials: false,
        timeout: 3000,
        headers: { 'x-api-key': import.meta.env.VITE_X_API_KEY },
        params: {
          limit: count,
          mime_types: 'jpg,png',
          size: 'small',
          has_breeds: 1
        }
      })) as CatListItem[]
      resolve(data)
    } catch (err) {
      resolve(new Array(count).fill(failedImg))
    }
  })
}
