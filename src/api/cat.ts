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

export async function getCatList(count: number): Promise<CatListItem[]> {
  const data = await axios.get('/cat/images/search', {
    headers: { 'x-api-key': import.meta.env.VITE_X_API_KEY },
    params: {
      limit: count,
      mime_types: 'jpg,png',
      size: 'small',
      has_breeds: 1
    }
  })
  return data as any
}
