import type {
  Product,
  ProductCategory,
  ProductCategoryId,
} from '../types/product'
import { publicAsset } from '../utils/publicAsset'

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
  {
    id: 'beads',
    name: '手串',
    description: '天然散珠自由搭配，轻松找到适合日常的一串颜色。',
    sortOrder: 50,
  },
  {
    id: 'bangle',
    name: '手镯',
    description: '翡翠、岫玉与独山玉细条镯，可单戴，也可叠戴。',
    sortOrder: 60,
  },
  {
    id: 'specimen',
    name: '标本',
    description: '保留天然结晶形态的矿物原石，适合观察与收藏。',
    sortOrder: 70,
  },
  {
    id: 'display',
    name: '摆件',
    description: '把矿物的天然形态带进书桌与日常空间。',
    sortOrder: 80,
  },
  {
    id: 'accessory',
    name: '配件',
    description: '散珠与小配件，为自由搭配和手作留出空间。',
    sortOrder: 90,
  },
  {
    id: 'luxury',
    name: '高端珠宝',
    description: '从彩宝成品到裸石定制，面向进阶珠宝爱好者。',
    sortOrder: 100,
  },
  {
    id: 'couple',
    name: '情侣款式',
    description: '适合共同挑选、成对佩戴或留下纪念的款式。',
    sortOrder: 110,
  },
]

export const products: Product[] = [
  {
    id: 'prod-natural-stone-beads',
    slug: 'natural-stone-beads',
    name: '天然散珠手串',
    category: 'beads',
    categoryName: '手串',
    relatedCategories: ['accessory'],
    labels: ['推荐'],
    coverImage: {
      src: publicAsset('products/hand-beads.jpg'),
      alt: '天然玉石散珠手串实拍',
    },
    galleryImages: [
      {
        src: publicAsset('products/hand-beads.jpg'),
        alt: '天然玉石散珠手串佩戴实拍',
      },
    ],
    price: {
      type: 'range',
      min: 15,
      max: 60,
      currency: 'CNY',
      unit: '条',
      display: '¥15 - ¥60 / 条',
      note: '散珠也可按颗或按串计价',
    },
    material: '阿富汗玉、玛瑙、草莓晶、天河石等天然散珠',
    gemstone: '可选纯色或自由混搭',
    size: '散珠约 8mm - 10mm',
    scene: '日常搭配、自由 DIY、学生礼物',
    shortDescription: '纯色基础款或自由混搭，用天然散珠配出自己的颜色。',
    longDescription:
      '阿富汗玉、玛瑙、草莓晶与天河石等天然散珠，可选纯色基础款，也可以现场自由混搭。价格轻松、颜色丰富，适合日常佩戴，也保留了矿物本身的自然趣味。',
    searchKeywords: [
      '手串',
      '散珠',
      'DIY',
      '阿富汗玉',
      '玛瑙',
      '草莓晶',
      '天河石',
      '学生',
    ],
    isFeatured: true,
    sortOrder: 10,
  },
  {
    id: 'prod-natural-jade-bangle',
    slug: 'natural-jade-bangle',
    name: '天然玉石手镯',
    category: 'bangle',
    categoryName: '手镯',
    labels: ['推荐'],
    coverImage: {
      src: publicAsset('products/jade-bangle.jpg'),
      alt: '柜台陈列的天然玉石手镯实拍',
    },
    galleryImages: [
      {
        src: publicAsset('products/jade-bangle.jpg'),
        alt: '不同玉色与圈口的手镯陈列',
      },
    ],
    price: {
      type: 'range',
      min: 30,
      max: 150,
      currency: 'CNY',
      unit: '只',
      display: '¥30 - ¥150 / 只',
      note: '价格视玉质与圈口而定',
    },
    material: '商业级翡翠、岫玉、独山玉等',
    gemstone: '多种天然玉料与玉色可选',
    size: '按实际圈口挑选',
    scene: '日常单戴、双镯叠戴、入门选玉',
    shortDescription: '从清新阳绿到温润油青，细条镯适合单戴也适合叠戴。',
    longDescription:
      '翡翠、岫玉与独山玉等细条手镯，颜色从清新阳绿到温润油青皆有。可根据圈口与玉色现场挑选；天然玉料中的棉线与纹理属于材质本身的正常表现。',
    searchKeywords: [
      '手镯',
      '翡翠',
      '岫玉',
      '独山玉',
      '阳绿',
      '油青',
      '叠戴',
      '圈口',
    ],
    isFeatured: true,
    sortOrder: 20,
  },
  {
    id: 'prod-woven-jade-bracelet',
    slug: 'woven-jade-bracelet',
    name: '玉石编绳手链',
    category: 'bracelet',
    categoryName: '手链',
    labels: ['新品', '推荐'],
    coverImage: {
      src: publicAsset('products/woven-bracelet.jpg'),
      alt: '玉石小配件与手工编绳手链实拍',
    },
    galleryImages: [
      {
        src: publicAsset('products/woven-bracelet.jpg'),
        alt: '不同花色的玉石编绳手链展示',
      },
    ],
    price: {
      type: 'range',
      min: 50,
      max: 120,
      currency: 'CNY',
      unit: '条',
      display: '¥50 - ¥120 / 条',
    },
    material: '925 银、和田玉或翡翠小配件、手工编绳',
    gemstone: '和田玉 / 翡翠路路通、平安扣等',
    size: '按款式与腕围确认',
    scene: '毕业礼物、日常通勤、东方风格搭配',
    shortDescription: '玉石小件与手工编绳结合，轻巧、日常，也适合赠礼。',
    longDescription:
      '将樱花等东方美学元素与手工编绳结合，搭配 925 银扣及天然和田玉、翡翠小路路通或平安扣。整体轻巧耐看，适合作为毕业礼物或日常通勤配饰。',
    searchKeywords: [
      '手链',
      '编绳',
      '925银',
      '和田玉',
      '翡翠',
      '路路通',
      '平安扣',
      '毕业礼物',
    ],
    isFeatured: true,
    sortOrder: 30,
  },
  {
    id: 'prod-color-gem-jewelry',
    slug: 'color-gem-jewelry',
    name: '高级彩宝戒指与吊坠',
    category: 'luxury',
    categoryName: '高端珠宝',
    relatedCategories: ['ring', 'necklace'],
    labels: ['新品'],
    coverImage: {
      src: publicAsset('products/color-gem-jewelry.jpg'),
      alt: '银镶彩色宝石戒指实拍',
    },
    galleryImages: [
      {
        src: publicAsset('products/color-gem-jewelry.jpg'),
        alt: '多种彩宝戒指佩戴实拍',
      },
    ],
    price: {
      type: 'range',
      min: 100,
      max: 350,
      currency: 'CNY',
      unit: '件',
      display: '¥100 - ¥350 / 件',
    },
    material: 'S925 银镶嵌',
    gemstone: '海蓝宝、托帕石、石榴石、珍珠等',
    size: '戒指按手寸挑选，吊坠按款式确认',
    scene: '第一件彩色宝石、日常轻奢、礼物',
    shortDescription: '明亮彩宝与成熟切割，适合作为第一件彩色宝石首饰。',
    longDescription:
      '海蓝宝、托帕石、石榴石与珍珠等彩色宝石，以 S925 银镶嵌呈现。色彩明亮、款式精致，适合希望从日常银饰进阶到第一件彩色宝石首饰的人。',
    searchKeywords: [
      '彩宝',
      '戒指',
      '吊坠',
      '项链',
      '海蓝宝',
      '托帕石',
      '石榴石',
      '珍珠',
      'S925银',
    ],
    isFeatured: false,
    sortOrder: 40,
  },
  {
    id: 'prod-geological-mineral-specimen',
    slug: 'geological-mineral-specimen',
    name: '地质特色矿物标本',
    category: 'specimen',
    categoryName: '标本',
    relatedCategories: ['display'],
    labels: ['推荐'],
    coverImage: {
      src: publicAsset('products/mineral-specimen.jpg'),
      alt: '地质特色矿物原石标本实拍',
    },
    galleryImages: [
      {
        src: publicAsset('products/mineral-specimen.jpg'),
        alt: '多种天然矿物标本陈列实拍',
      },
    ],
    price: {
      type: 'range',
      min: 40,
      max: 200,
      currency: 'CNY',
      unit: '座',
      display: '¥40 - ¥200+ / 座',
      note: '价格依稀有度与品相而定',
    },
    material: '水晶簇、伴生矿、玛瑙切片、萤石等',
    gemstone: '天然矿物原石，保留原生结晶形态',
    size: '按实物确认',
    scene: '地质收藏、书桌摆件、办公室陈设',
    shortDescription: '保留开采后的天然结晶形态，每一座都有不同的矿物纹理。',
    longDescription:
      '水晶簇、伴生矿、玛瑙切片与萤石等天然矿物原石，保留开采后的原生结晶形态。既可作为地质观察标本，也适合放在书桌或办公室作为自然陈设。',
    searchKeywords: [
      '标本',
      '摆件',
      '水晶簇',
      '伴生矿',
      '玛瑙切片',
      '萤石',
      '矿物',
      '原石',
      '收藏',
    ],
    isFeatured: false,
    sortOrder: 50,
  },
  {
    id: 'prod-premium-loose-gemstone',
    slug: 'premium-loose-gemstone',
    name: '中高端彩宝裸石',
    category: 'luxury',
    categoryName: '高端珠宝',
    relatedCategories: ['ring', 'necklace', 'accessory'],
    labels: ['定制'],
    coverImage: {
      src: publicAsset('products/premium-gemstone.jpg'),
      alt: '中高端彩宝裸石与定制吊坠实拍',
    },
    galleryImages: [
      {
        src: publicAsset('products/premium-gemstone.jpg'),
        alt: '彩宝裸石定制成品陈列实拍',
      },
    ],
    price: {
      type: 'range',
      min: 800,
      max: 2000,
      currency: 'CNY',
      unit: '克拉',
      display: '¥800 - ¥2,000+ / 克拉',
      note: '按宝石种类、克拉数与品相计价',
    },
    material: '彩色宝石裸石，可定制外托',
    gemstone: '碧玺、坦桑石、高品质海蓝宝等',
    size: '按克拉计价，实物挑选',
    scene: '进阶收藏、戒指或吊坠定制、纪念礼物',
    shortDescription: '颜色浓郁、净度较高的彩宝裸石，支持现场挑选与外托定制。',
    longDescription:
      '面向进阶珠宝爱好者的彩宝裸石，可现场挑选碧玺、坦桑石或高品质海蓝宝，再根据佩戴需求定制外托。价格会随克拉数、颜色、净度与品相变化。',
    searchKeywords: [
      '裸石',
      '彩宝',
      '碧玺',
      '坦桑石',
      '海蓝宝',
      '克拉',
      '定制',
      '戒指',
      '吊坠',
      '收藏',
    ],
    isFeatured: false,
    sortOrder: 60,
  },
]

export const featuredProducts = products.filter((product) => product.isFeatured)

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug)
}

export function getProductsByCategory(category: ProductCategoryId) {
  return products.filter(
    (product) =>
      product.category === category ||
      product.relatedCategories?.includes(category),
  )
}
