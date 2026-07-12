import { primaryContactChannels } from '../../data/contactChannels'
import { publicAsset } from '../../utils/publicAsset'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img
          src={publicAsset('brand/logo-mark.png')}
          alt=""
          aria-hidden="true"
          decoding="async"
        />
        <span>南望玉叙</span>
      </div>
      <p>天然玉石、彩色宝石与矿物标本，从真实材质开始挑选。</p>
      <div className="footer-links" aria-label="咨询渠道">
        {primaryContactChannels.map((channel) => (
          <span key={channel.id}>{channel.label}</span>
        ))}
      </div>
    </footer>
  )
}
