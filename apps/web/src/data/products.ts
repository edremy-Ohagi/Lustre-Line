import type {
  Product,
  ProductCategory,
  ProductCategoryId,
} from '../types/product'

export const productCategories: ProductCategory[] = [
  {
    id: 'necklace',
    name: '项链',
    description: '贴近锁骨线条的温柔光泽，适合日常与送礼。',
    sortOrder: 10,
  },
  {
    id: 'bracelet',
    name: '手链',
    description: '轻盈细链与玉石点缀，留给手腕一抹柔光。',
    sortOrder: 20,
  },
  {
    id: 'earring',
    name: '耳钉',
    description: '克制而精致的小体量珠宝，适合通勤与约会。',
    sortOrder: 30,
  },
  {
    id: 'ring',
    name: '戒指',
    description: '可日常佩戴，也可作为定制心意的纪念信物。',
    sortOrder: 40,
  },
]

export const products: Product[] = [
  {
    id: 'prod-moon-pearl-necklace',
    slug: 'moon-pearl-necklace',
    name: '月影珍珠项链',
    category: 'necklace',
    categoryName: '项链',
    labels: ['新品', '推荐'],
    coverImage: {
      src: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=85',
      alt: '柔光下的珍珠项链',
    },
    galleryImages: [
      {
        src: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=85',
        alt: '月影珍珠项链正面',
      },
      {
        src: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=85',
        alt: '珍珠与金色链条细节',
      },
    ],
    price: {
      type: 'fixed',
      amount: 1680,
      currency: 'CNY',
      display: '¥ 1,680',
    },
    material: '14K 包金 / 淡水珍珠',
    gemstone: '淡水珍珠',
    size: '链长约 40cm，可调节延长链 5cm',
    scene: '日常通勤、轻礼服、纪念日送礼',
    shortDescription: '柔和珍珠与细链光泽，适合贴近日常的精致佩戴。',
    longDescription:
      '月影珍珠项链以温润珍珠作为视觉中心，搭配细腻金色链条，保留东方含蓄感，也适合现代日常造型。',
    isFeatured: true,
    sortOrder: 10,
  },
  {
    id: 'prod-jade-dew-bracelet',
    slug: 'jade-dew-bracelet',
    name: '玉露细链手链',
    category: 'bracelet',
    categoryName: '手链',
    labels: ['推荐'],
    coverImage: {
      src: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=85',
      alt: '浅色背景上的精致手链',
    },
    galleryImages: [
      {
        src: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=85',
        alt: '玉露细链手链展示',
      },
      {
        src: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1200&q=85',
        alt: '手链金属细节',
      },
    ],
    price: {
      type: 'fixed',
      amount: 980,
      currency: 'CNY',
      display: '¥ 980',
    },
    material: '925 银镀金 / 天然玉髓',
    gemstone: '玉髓',
    size: '链长约 16cm，可调节延长链 3cm',
    scene: '日常叠戴、生日礼物、轻中式穿搭',
    shortDescription: '细链托起一抹清润玉色，温柔但不失存在感。',
    longDescription:
      '玉露细链手链以柔和玉色为点睛，适合单独佩戴，也能与腕表或细链叠戴，呈现更轻盈的层次。',
    isFeatured: true,
    sortOrder: 20,
  },
  {
    id: 'prod-clear-glow-earring',
    slug: 'clear-glow-earring',
    name: '清辉耳钉',
    category: 'earring',
    categoryName: '耳钉',
    labels: ['新品'],
    coverImage: {
      src: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=85',
      alt: '精致耳钉特写',
    },
    galleryImages: [
      {
        src: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=85',
        alt: '清辉耳钉主图',
      },
      {
        src: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=85',
        alt: '耳钉佩戴氛围',
      },
    ],
    price: {
      type: 'fixed',
      amount: 760,
      currency: 'CNY',
      display: '¥ 760',
    },
    material: '925 银镀白金',
    gemstone: '锆石',
    size: '单枚约 6mm',
    scene: '通勤、约会、轻礼服搭配',
    shortDescription: '清透亮泽的小体量耳钉，为日常造型留下干净亮点。',
    longDescription:
      '清辉耳钉以简洁轮廓承载柔和光感，不挑场合，适合希望保持精致但不夸张的日常佩戴。',
    isFeatured: false,
    sortOrder: 30,
  },
  {
    id: 'prod-nanwang-band-ring',
    slug: 'nanwang-band-ring',
    name: '南望素圈戒指',
    category: 'ring',
    categoryName: '戒指',
    labels: ['定制'],
    coverImage: {
      src: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=85',
      alt: '柔光中的金色戒指',
    },
    galleryImages: [
      {
        src: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=85',
        alt: '南望素圈戒指主图',
      },
      {
        src: 'https://images.unsplash.com/photo-1603561596112-db1d1d5d2a99?auto=format&fit=crop&w=1200&q=85',
        alt: '戒指细节与佩戴氛围',
      },
    ],
    price: {
      type: 'inquiry',
      display: '询问价格',
    },
    material: '可选 18K 金 / 925 银镀金',
    gemstone: '可选刻字、玉石或锆石点缀',
    size: '按手寸定制',
    scene: '纪念日、情侣对戒、日常信物',
    shortDescription: '简洁素圈基础上支持刻字与细节定制，适合作为纪念信物。',
    longDescription:
      '南望素圈戒指以克制轮廓作为基础，可根据佩戴场景调整材质、尺寸与刻字，让心意在细节里被保留下来。',
    isFeatured: true,
    sortOrder: 40,
  },
]

export const featuredProducts = products.filter((product) => product.isFeatured)

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug)
}

export function getProductsByCategory(category: ProductCategoryId) {
  return products.filter((product) => product.category === category)
}
