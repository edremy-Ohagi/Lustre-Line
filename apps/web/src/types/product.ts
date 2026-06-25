export type ProductCategoryId = 'necklace' | 'bracelet' | 'earring' | 'ring'

export type ProductLabel = '新品' | '推荐' | '定制'

export type ProductPrice =
  | {
      type: 'fixed'
      amount: number
      currency: 'CNY'
      display: string
    }
  | {
      type: 'inquiry'
      display: '询问价格'
    }

export interface ProductCategory {
  id: ProductCategoryId
  name: string
  description: string
  sortOrder: number
}

export interface ProductImage {
  src: string
  alt: string
}

export interface Product {
  id: string
  slug: string
  name: string
  category: ProductCategoryId
  categoryName: string
  labels: ProductLabel[]
  coverImage: ProductImage
  galleryImages: ProductImage[]
  price: ProductPrice
  material: string
  gemstone: string
  size: string
  scene: string
  shortDescription: string
  longDescription: string
  isFeatured: boolean
  sortOrder: number
}
