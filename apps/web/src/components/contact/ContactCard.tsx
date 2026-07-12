import { BookOpenText, MessageCircle } from 'lucide-react'
import type { ContactChannel } from '../../types/contact'

interface ContactCardProps {
  channel: ContactChannel
}

export function ContactCard({ channel }: ContactCardProps) {
  const Icon = channel.type === 'xiaohongshu' ? BookOpenText : MessageCircle
  const visibleValue = channel.value !== '待补充' ? channel.value : ''

  return (
    <article className="contact-card">
      <div className="contact-card-header">
        <span className="contact-icon" aria-hidden="true">
          <Icon size={20} />
        </span>
        <div>
          <h3>{channel.label}</h3>
          <p>{channel.description}</p>
        </div>
      </div>

      <div className="qr-frame" aria-label={channel.qrCode?.alt}>
        {channel.qrCode?.src ? (
          <img
            src={channel.qrCode.src}
            alt={channel.qrCode.alt}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="qr-placeholder">
            <BookOpenText aria-hidden="true" size={28} />
            <strong>账号更新中</strong>
            <span>上新与佩戴灵感将在这里同步</span>
          </div>
        )}
      </div>

      <p className="contact-note">
        {visibleValue
          ? `${channel.type === 'wechat' ? '微信号' : '账号'}：${visibleValue}`
          : '也可以先通过微信了解当前款式'}
      </p>
    </article>
  )
}
