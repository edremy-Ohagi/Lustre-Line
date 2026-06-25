import type { ContactChannel } from '../types/contact'

export const contactChannels: ContactChannel[] = [
  {
    id: 'contact-wechat',
    type: 'wechat',
    label: '微信咨询',
    value: '待补充',
    description: '适合咨询款式、材质、尺寸与定制细节。',
    qrCode: {
      alt: '南望玉叙微信二维码',
      placeholder: true,
    },
    primary: true,
    sortOrder: 10,
  },
  {
    id: 'contact-xiaohongshu',
    type: 'xiaohongshu',
    label: '小红书',
    value: '待补充',
    description: '适合查看上新、佩戴灵感与更多搭配图。',
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
