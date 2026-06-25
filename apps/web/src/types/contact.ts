export type ContactChannelType =
  | 'wechat'
  | 'xiaohongshu'
  | 'phone'
  | 'email'
  | 'address'
  | 'other'

export interface ContactQrCode {
  src?: string
  alt: string
  placeholder: boolean
}

export interface ContactChannel {
  id: string
  type: ContactChannelType
  label: string
  value: string
  description: string
  qrCode?: ContactQrCode
  primary: boolean
  sortOrder: number
}
