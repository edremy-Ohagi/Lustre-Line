# Content And Data Rules

## Product Categories

Initial categories:

```text
项链
手链
耳钉
戒指
```

Categories must be designed so they can become backend-managed later.

## Product Fields

MVP product data should support:

```text
id
slug
name
category
labels
coverImage
galleryImages
priceType
price
material
gemstone
size
scene
shortDescription
longDescription
isFeatured
sortOrder
```

## Price Rules

- Use RMB as the default currency.
- Fixed price should display as `¥ 1,280` or similar.
- Inquiry-only products should display `询问价格`.
- Do not mix currencies in MVP.

## Label Rules

Supported MVP labels:

```text
新品
推荐
定制
```

A product may have more than one label.

## Image Rules

- Use high-quality placeholders in MVP.
- Images should feel close to the brand tone.
- Avoid dark, blurry, generic, or overly cropped images.
- Product cards need stable image aspect ratios.
- Real product images can replace placeholders later without changing layout.

## Contact Content

The site should support:

```text
微信二维码
小红书二维码
微信号
手机号
邮箱
门店地址
其他社交账号
```

QR code images may be placeholders until the founder provides real files.

## Customer-Facing Copy

Do not include:

```text
学习项目
demo
后端阶段
技术栈说明
练习
占位数据说明
```

Customer-facing text should sound like a real jewelry brand.
