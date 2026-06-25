import { Link } from 'react-router-dom'
import { primaryContactChannels } from '../data/contactChannels'
import { featuredProducts, productCategories } from '../data/products'

export function HomePage() {
  const heroProduct = featuredProducts[0]
  const categoryNames = productCategories
    .map((category) => category.name)
    .join(' / ')
  const contactNames = primaryContactChannels
    .map((channel) => channel.label)
    .join('与')

  return (
    <section className="route-placeholder" aria-labelledby="home-title">
      <p className="eyebrow">珠宝展示与定制咨询</p>
      <h1 id="home-title">南望玉叙</h1>
      <p>以温润玉色、细腻金属光泽与日常佩戴感，呈现适合送礼与自留的轻珠宝。</p>
      <p className="inline-meta">{categoryNames}</p>
      {heroProduct ? (
        <Link className="text-link" to={`/products/${heroProduct.slug}`}>
          查看{heroProduct.name}
        </Link>
      ) : null}
      <p className="supporting-note">{contactNames}咨询入口即将开放。</p>
    </section>
  )
}
