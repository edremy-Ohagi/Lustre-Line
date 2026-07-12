import type { ContactChannel } from '../types/contact'
import { publicAsset } from '../utils/publicAsset'

export const contactChannels: ContactChannel[] = [
  {
    id: 'contact-wechat',
    type: 'wechat',
    label: '微信咨询',
    value: 'sept',
    description: '添加微信，咨询现货、圈口、材质与定制细节。',
    qrCode: {
      src: publicAsset('contact/wechat-sept.jpg'),
      alt: '南望玉叙微信二维码',
      placeholder: false,
    },
    primary: true,
    sortOrder: 10,
  },
  {
    id: 'contact-xiaohongshu',
    type: 'xiaohongshu',
    label: '小红书',
    value: '待补充',
    description: '账号信息更新中，后续可在这里查看上新与佩戴灵感。',
    qrCode: {
      alt: '南望玉叙小红书二维码',
      placeholder: true,
    },
    primary: true,
    sortOrder: 20,
  },
]

export const primaryContactChannels = contactChannels.filter(
  (channel) => channel.primary,
)
