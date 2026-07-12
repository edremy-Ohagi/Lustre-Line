import { ArrowUpRight, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Product } from '../../types/product'

interface ProductCardProps {
  product: Product
  index: number
  onQuickView: (product: Product) => void
}

export function ProductCard({ product, index, onQuickView }: ProductCardProps) {
  return (
    <article className="product-card">
      <button
        className="product-card-media"
        type="button"
        onClick={() => onQuickView(product)}
        aria-label={`查看${product.name}详情`}
      >
        <img
          src={product.coverImage.src}
          alt={product.coverImage.alt}
          loading="lazy"
          decoding="async"
        />
        <span className="product-card-index">
          {index.toString().padStart(2, '0')}
        </span>
      </button>

      <div className="product-card-body">
        <div className="product-card-topline">
          <span>{product.categoryName}</span>
          <div className="label-row" aria-label={`${product.name}标签`}>
            {product.labels.map((label) => (
              <span className="product-label" key={label}>
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="product-card-title">
          <h3>{product.name}</h3>
          <strong>{product.price.display}</strong>
        </div>

        <p>{product.shortDescription}</p>

        <div className="product-card-actions">
          <button
            className="button button-secondary button-compact"
            type="button"
            onClick={() => onQuickView(product)}
          >
            <Plus aria-hidden="true" size={16} />
            查看细节
          </button>
          <Link
            className="icon-link"
            to={`/products/${product.slug}`}
            aria-label={`进入${product.name}独立详情页`}
          >
            详情页
            <ArrowUpRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </div>
    </article>
  )
}
