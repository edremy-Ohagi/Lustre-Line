import { ArrowLeft, MessageCircle } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { ContactCard } from '../components/contact/ContactCard'
import { primaryContactChannels } from '../data/contactChannels'
import { getProductBySlug, products } from '../data/products'

export function ProductDetailPage() {
  const { slug } = useParams()
  const product = slug ? getProductBySlug(slug) : undefined
  const relatedProducts = products
    .filter(
      (item) =>
        item.slug !== slug &&
        (item.category === product?.category ||
          item.relatedCategories?.includes(product?.category ?? 'luxury')),
    )
    .concat(products.filter((item) => item.slug !== slug))
    .filter(
      (item, index, items) =>
        items.findIndex((candidate) => candidate.id === item.id) === index,
    )
    .slice(0, 3)

  const scrollToContact = () => {
    document.getElementById('detail-contact')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <section className="detail-page" aria-labelledby="detail-title">
      <div className="detail-inner">
        <Link className="back-link" to="/">
          <ArrowLeft aria-hidden="true" size={18} />
          返回首页
        </Link>

        {product ? (
          <>
            <div className="detail-hero">
              <div className="detail-media">
                <img
                  src={product.coverImage.src}
                  alt={product.coverImage.alt}
                  decoding="async"
                  fetchPriority="high"
                />
              </div>

              <div className="detail-copy">
                <p className="eyebrow">{product.categoryName}</p>
                <h1 id="detail-title">{product.name}</h1>
                <div className="label-row">
                  {product.labels.map((label) => (
                    <span className="product-label" key={label}>
                      {label}
                    </span>
                  ))}
                </div>
                <p className="detail-price">{product.price.display}</p>
                {product.price.type === 'range' && product.price.note ? (
                  <p className="price-note">{product.price.note}</p>
                ) : null}
                <p>{product.longDescription}</p>

                <dl className="product-facts detail-facts">
                  <div>
                    <dt>材质</dt>
                    <dd>{product.material}</dd>
                  </div>
                  <div>
                    <dt>特点</dt>
                    <dd>{product.gemstone}</dd>
                  </div>
                  <div>
                    <dt>尺寸</dt>
                    <dd>{product.size}</dd>
                  </div>
                  <div>
                    <dt>场景</dt>
                    <dd>{product.scene}</dd>
                  </div>
                </dl>

                <button
                  className="button button-primary"
                  type="button"
                  onClick={scrollToContact}
                >
                  <MessageCircle aria-hidden="true" size={18} />
                  咨询这件作品
                </button>
              </div>
            </div>

            {product.galleryImages.length > 1 ? (
              <div
                className="detail-gallery"
                aria-label={`${product.name}图片`}
              >
                {product.galleryImages.map((image) => (
                  <img
                    src={image.src}
                    alt={image.alt}
                    key={image.src}
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </div>
            ) : null}

            <section className="detail-related" aria-labelledby="related-title">
              <div className="section-heading">
                <p className="eyebrow">也可以看看</p>
                <h2 id="related-title">相近的温柔光泽</h2>
              </div>
              <div className="related-grid">
                {relatedProducts.map((item) => (
                  <Link
                    className="related-item"
                    key={item.id}
                    to={`/products/${item.slug}`}
                  >
                    <img
                      src={item.coverImage.src}
                      alt={item.coverImage.alt}
                      loading="lazy"
                      decoding="async"
                    />
                    <span>{item.name}</span>
                    <strong>{item.price.display}</strong>
                  </Link>
                ))}
              </div>
            </section>

            <section
              className="detail-contact"
              id="detail-contact"
              aria-labelledby="detail-contact-title"
            >
              <div className="section-heading">
                <p className="eyebrow">联系咨询</p>
                <h2 id="detail-contact-title">确认尺寸、材质或定制可能</h2>
              </div>
              <div className="contact-grid">
                {primaryContactChannels.map((channel) => (
                  <ContactCard channel={channel} key={channel.id} />
                ))}
              </div>
            </section>
          </>
        ) : (
          <div className="detail-empty">
            <p className="eyebrow">商品详情</p>
            <h1 id="detail-title">作品暂未上架</h1>
            <p>这件作品暂时没有公开信息，可以先返回首页查看当前作品。</p>
            <Link className="button button-secondary" to="/">
              返回首页
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
