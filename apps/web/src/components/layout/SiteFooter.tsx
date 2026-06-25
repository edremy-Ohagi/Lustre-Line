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
      <p>温润玉色与细腻光泽，为日常与心意留一件可佩戴的纪念。</p>
      <div className="footer-links" aria-label="咨询渠道">
        {primaryContactChannels.map((channel) => (
          <span key={channel.id}>{channel.label}</span>
        ))}
      </div>
    </footer>
  )
}
