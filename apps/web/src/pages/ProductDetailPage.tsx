import { Link, useParams } from 'react-router-dom'
import { getProductBySlug } from '../data/products'

export function ProductDetailPage() {
  const { slug } = useParams()
  const product = slug ? getProductBySlug(slug) : undefined

  return (
    <section className="route-placeholder" aria-labelledby="detail-title">
      <p className="eyebrow">{product?.categoryName ?? '商品详情'}</p>
      <h1 id="detail-title">{product?.name ?? '作品暂未上架'}</h1>
      {product ? (
        <>
          <p>{product.shortDescription}</p>
          <p className="inline-meta">
            {product.price.display} · {product.material} · {product.scene}
          </p>
        </>
      ) : (
        <p>这件作品暂时没有公开信息，可以先返回首页查看当前作品。</p>
      )}
      <Link className="text-link" to="/">
        返回首页
      </Link>
    </section>
  )
}
