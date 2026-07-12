import { ArrowDown, ArrowRight, Search, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { ContactCard } from '../components/contact/ContactCard'
import { ProductCard } from '../components/products/ProductCard'
import { ProductDetailModal } from '../components/products/ProductDetailModal'
import { primaryContactChannels } from '../data/contactChannels'
import { productCategories, products } from '../data/products'
import type { Product, ProductCategoryId } from '../types/product'

type CategoryFilter = 'popular' | 'all' | ProductCategoryId

const browseOptions: Array<{ id: CategoryFilter; name: string }> = [
  { id: 'popular', name: '热门款式' },
  { id: 'all', name: '全部' },
  ...productCategories.map(({ id, name }) => ({ id, name })),
]

function productBelongsToCategory(product: Product, category: CategoryFilter) {
  if (category === 'all') return true
  if (category === 'popular') return product.isFeatured

  return (
    product.category === category ||
    product.relatedCategories?.includes(category) === true
  )
}

function matchesSearch(product: Product, query: string) {
  if (!query) return true

  const searchableText = [
    product.name,
    product.categoryName,
    product.material,
    product.gemstone,
    product.size,
    product.scene,
    product.shortDescription,
    product.longDescription,
    ...product.labels,
    ...product.searchKeywords,
    ...(product.relatedCategories ?? []).map(
      (categoryId) =>
        productCategories.find((category) => category.id === categoryId)?.name,
    ),
  ]
    .filter(Boolean)
    .join(' ')
    .toLocaleLowerCase('zh-CN')

  return searchableText.includes(query)
}

export function HomePage() {
  const [activeCategory, setActiveCategory] =
    useState<CategoryFilter>('popular')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const heroGallery = products.slice(0, 3)
  const normalizedSearch = searchQuery.trim().toLocaleLowerCase('zh-CN')

  const filteredProducts = useMemo(
    () =>
      products.filter(
        (product) =>
          productBelongsToCategory(product, activeCategory) &&
          matchesSearch(product, normalizedSearch),
      ),
    [activeCategory, normalizedSearch],
  )

  const activeCategoryName =
    browseOptions.find((option) => option.id === activeCategory)?.name ?? '全部'

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const scrollToContact = () => scrollToSection('contact')

  return (
    <>
      <section className="hero-section" aria-labelledby="home-title">
        <div className="hero-inner">
          <div className="hero-content">
            <p className="eyebrow">南望玉叙 · 天然材质选品</p>
            <h1 id="home-title">
              <span>从矿物本真，</span>
              <span>到腕间微光。</span>
            </h1>
            <p className="hero-lead">
              从天然散珠、玉石手镯到彩色宝石与矿物标本，保留材质原本的颜色，
              也让每一件都能轻松进入日常。
            </p>

            <div className="hero-actions">
              <button
                className="button button-primary"
                type="button"
                onClick={() => scrollToSection('catalogue')}
              >
                浏览选品
                <ArrowDown aria-hidden="true" size={17} />
              </button>
              <button
                className="button button-text"
                type="button"
                onClick={scrollToContact}
              >
                微信咨询
                <ArrowRight aria-hidden="true" size={17} />
              </button>
            </div>

            <dl className="hero-facts" aria-label="当前选品信息">
              <div>
                <dt>06</dt>
                <dd>类真实选品</dd>
              </div>
              <div>
                <dt>¥15</dt>
                <dd>起售价格</dd>
              </div>
              <div>
                <dt>天然</dt>
                <dd>玉石与矿物</dd>
              </div>
            </dl>
          </div>

          <div className="hero-still-life" aria-label="店内商品实拍">
            {heroGallery.map((product, index) => (
              <button
                className={`hero-photo hero-photo-${index + 1}`}
                key={product.id}
                type="button"
                onClick={() => setSelectedProduct(product)}
                aria-label={`快速查看${product.name}`}
              >
                <img
                  src={product.coverImage.src}
                  alt={product.coverImage.alt}
                  decoding="async"
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                />
                <span>{product.name}</span>
              </button>
            ))}
            <span className="hero-photo-note" aria-hidden="true">
              店内实拍
            </span>
          </div>
        </div>
      </section>

      <section
        className="section catalogue-section"
        id="catalogue"
        aria-labelledby="catalogue-title"
      >
        <div className="section-inner">
          <div className="catalogue-intro">
            <div className="section-heading">
              <p className="eyebrow">按品类浏览</p>
              <h2 id="catalogue-title">先从喜欢的材质开始</h2>
              <p>搜索品类、材质或宝石名称，也可以直接按标签筛选。</p>
            </div>

            <label className="search-field">
              <Search aria-hidden="true" size={20} />
              <span className="sr-only">搜索商品</span>
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="搜索：翡翠、手镯、海蓝宝…"
              />
              {searchQuery ? (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="清空搜索"
                  title="清空搜索"
                >
                  <X aria-hidden="true" size={18} />
                </button>
              ) : null}
            </label>
          </div>

          <div className="category-strip" role="list" aria-label="商品分类">
            {browseOptions.map((option) => {
              const count = products.filter((product) =>
                productBelongsToCategory(product, option.id),
              ).length

              return (
                <button
                  className={
                    activeCategory === option.id
                      ? 'category-tab is-active'
                      : 'category-tab'
                  }
                  key={option.id}
                  type="button"
                  onClick={() => setActiveCategory(option.id)}
                  aria-pressed={activeCategory === option.id}
                >
                  <span>{option.name}</span>
                  <small>{count.toString().padStart(2, '0')}</small>
                </button>
              )
            })}
          </div>

          <div className="results-heading" id="products">
            <div>
              <p className="eyebrow">当前选品</p>
              <h2>
                {normalizedSearch
                  ? `“${searchQuery.trim()}”`
                  : activeCategoryName}
              </h2>
            </div>
            <p aria-live="polite">找到 {filteredProducts.length} 件相关商品</p>
          </div>

          {filteredProducts.length ? (
            <div className="product-grid">
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index + 1}
                  onQuickView={setSelectedProduct}
                />
              ))}
            </div>
          ) : (
            <div className="empty-results">
              <p className="eyebrow">暂未陈列</p>
              <h3>这个方向暂时没有公开商品</h3>
              <p>可以换一个关键词，或直接发来喜欢的材质与预算，我们一起找。</p>
              <div>
                <button
                  className="button button-secondary"
                  type="button"
                  onClick={() => {
                    setActiveCategory('all')
                    setSearchQuery('')
                  }}
                >
                  查看全部
                </button>
                <button
                  className="button button-text"
                  type="button"
                  onClick={scrollToContact}
                >
                  联系咨询
                  <ArrowRight aria-hidden="true" size={17} />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <section
        className="section contact-section"
        id="contact"
        aria-labelledby="contact-title"
      >
        <div className="section-inner contact-layout">
          <div className="contact-copy">
            <p className="eyebrow">咨询与挑选</p>
            <h2 id="contact-title">照片之外，再确认一次真实细节</h2>
            <p>
              天然材质的颜色、纹理与尺寸各不相同。添加微信时，可以告诉我们喜欢的品类、
              预算和佩戴场景，再确认现货实拍、圈口或定制方式。
            </p>
            <div className="contact-promise" aria-label="咨询说明">
              <span>现货实拍</span>
              <span>尺寸确认</span>
              <span>定制沟通</span>
            </div>
          </div>

          <div className="contact-grid">
            {primaryContactChannels.map((channel) => (
              <ContactCard channel={channel} key={channel.id} />
            ))}
          </div>
        </div>
      </section>

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onConsult={scrollToContact}
      />
    </>
  )
}
