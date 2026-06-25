import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react'
import { useMemo, useState } from 'react'
import { ContactCard } from '../components/contact/ContactCard'
import { ProductCard } from '../components/products/ProductCard'
import { ProductDetailModal } from '../components/products/ProductDetailModal'
import { primaryContactChannels } from '../data/contactChannels'
import { featuredProducts, productCategories, products } from '../data/products'
import type { Product, ProductCategoryId } from '../types/product'

type CategoryFilter = 'all' | ProductCategoryId

export function HomePage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const heroProduct = featuredProducts[0] ?? products[0]
  const heroGallery = featuredProducts.slice(0, 3)
  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') {
      return products
    }

    return products.filter((product) => product.category === activeCategory)
  }, [activeCategory])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <>
      <section className="hero-section" aria-labelledby="home-title">
        <img
          className="hero-image"
          src={heroProduct.coverImage.src}
          alt={heroProduct.coverImage.alt}
          decoding="async"
          fetchPriority="high"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">珠宝展示与定制咨询</p>
          <h1 id="home-title">南望玉叙</h1>
          <p>
            以温润玉色、细腻金属光泽与日常佩戴感，呈现适合送礼与自留的轻珠宝。
          </p>
          <div className="hero-actions">
            <button
              className="button button-primary"
              type="button"
              onClick={scrollToContact}
            >
              <MessageCircle aria-hidden="true" size={18} />
              立即咨询
            </button>
            <button
              className="button button-ghost"
              type="button"
              onClick={() => {
                document.getElementById('products')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                })
              }}
            >
              查看作品
              <ArrowRight aria-hidden="true" size={18} />
            </button>
          </div>
          <div className="hero-meta" aria-label="当前服务范围">
            <span>项链</span>
            <span>手链</span>
            <span>耳钉</span>
            <span>戒指</span>
          </div>
        </div>
      </section>

      <section className="section intro-band" aria-label="推荐作品">
        <div className="section-inner hero-gallery">
          {heroGallery.map((product) => (
            <button
              className="mini-product"
              key={product.id}
              type="button"
              onClick={() => setSelectedProduct(product)}
            >
              <img
                src={product.coverImage.src}
                alt={product.coverImage.alt}
                loading="lazy"
                decoding="async"
              />
              <span>{product.name}</span>
            </button>
          ))}
        </div>
      </section>

      <section
        className="section category-section"
        id="categories"
        aria-labelledby="category-title"
      >
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">按品类浏览</p>
            <h2 id="category-title">为日常留一点温润光泽</h2>
          </div>

          <div className="category-strip" role="list" aria-label="商品分类">
            <button
              className={
                activeCategory === 'all'
                  ? 'category-pill is-active'
                  : 'category-pill'
              }
              type="button"
              onClick={() => setActiveCategory('all')}
              aria-pressed={activeCategory === 'all'}
            >
              全部
            </button>
            {productCategories.map((category) => (
              <button
                className={
                  activeCategory === category.id
                    ? 'category-pill is-active'
                    : 'category-pill'
                }
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                aria-pressed={activeCategory === category.id}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="category-copy-grid">
            {productCategories.map((category) => (
              <article className="category-copy" key={category.id}>
                <Sparkles aria-hidden="true" size={18} />
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section products-section"
        id="products"
        aria-labelledby="products-title"
      >
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">精选作品</p>
            <h2 id="products-title">温柔、克制，也有清晰的心意</h2>
            <p>每件作品都保留材质、尺寸与适合场景，方便先浏览，再咨询细节。</p>
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setSelectedProduct}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        className="section contact-section"
        id="contact"
        aria-labelledby="contact-title"
      >
        <div className="section-inner contact-layout">
          <div className="contact-copy">
            <p className="eyebrow">咨询与定制</p>
            <h2 id="contact-title">想确认材质、尺寸或定制细节，可以先来问问</h2>
            <p>
              当前以微信和小红书沟通为主。可以带着喜欢的款式、预算范围或佩戴场景咨询，
              后续再确认材质、尺寸与定制可能。
            </p>
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
