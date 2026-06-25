import { ArrowRight, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Product } from '../../types/product'

interface ProductCardProps {
  product: Product
  onQuickView: (product: Product) => void
}

export function ProductCard({ product, onQuickView }: ProductCardProps) {
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
      </button>

      <div className="product-card-body">
        <div className="product-card-topline">
          <span>{product.categoryName}</span>
          <strong>{product.price.display}</strong>
        </div>

        <h3>{product.name}</h3>

        <div className="label-row" aria-label={`${product.name}标签`}>
          {product.labels.map((label) => (
            <span className="product-label" key={label}>
              {label}
            </span>
          ))}
        </div>

        <p>{product.shortDescription}</p>

        <div className="product-card-actions">
          <button
            className="button button-secondary button-compact"
            type="button"
            onClick={() => onQuickView(product)}
          >
            <Search aria-hidden="true" size={16} />
            快速查看
          </button>
          <Link
            className="icon-link"
            to={`/products/${product.slug}`}
            aria-label={`进入${product.name}独立详情页`}
          >
            详情页
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </div>
    </article>
  )
}
