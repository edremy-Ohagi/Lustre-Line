import { ArrowRight, MessageCircle, X } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import type { Product } from '../../types/product'

interface ProductDetailModalProps {
  product: Product | null
  onClose: () => void
  onConsult: () => void
}

export function ProductDetailModal({
  product,
  onClose,
  onConsult,
}: ProductDetailModalProps) {
  useEffect(() => {
    if (!product) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, product])

  if (!product) {
    return null
  }

  const handleConsult = () => {
    onClose()
    window.setTimeout(onConsult, 80)
  }

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
    >
      <section
        className="product-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
      >
        <button
          className="icon-button modal-close"
          type="button"
          onClick={onClose}
          aria-label="关闭商品详情"
          title="关闭商品详情"
        >
          <X aria-hidden="true" size={18} />
        </button>

        <div className="modal-image-wrap">
          <img
            src={product.coverImage.src}
            alt={product.coverImage.alt}
            decoding="async"
          />
        </div>

        <div className="modal-content">
          <p className="eyebrow">{product.categoryName}</p>
          <h2 id="product-modal-title">{product.name}</h2>

          <div className="label-row">
            {product.labels.map((label) => (
              <span className="product-label" key={label}>
                {label}
              </span>
            ))}
          </div>

          <p className="modal-price">{product.price.display}</p>
          <p>{product.longDescription}</p>

          <div className="modal-actions">
            <button
              className="button button-primary"
              type="button"
              onClick={handleConsult}
            >
              <MessageCircle aria-hidden="true" size={18} />
              立即咨询
            </button>
            <Link
              className="button button-secondary"
              to={`/products/${product.slug}`}
            >
              进入详情页
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>

          <dl className="product-facts">
            <div>
              <dt>材质</dt>
              <dd>{product.material}</dd>
            </div>
            <div>
              <dt>主石</dt>
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
        </div>
      </section>
    </div>
  )
}
