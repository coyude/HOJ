export function getResizedSize(image, srcHeight, maxWidth) {
    // 判断图片是否需要缩放
    if (image.naturalHeight > srcHeight) {
        const ratio = srcHeight / image.naturalHeight // 计算缩放比例
        const width = image.naturalWidth * ratio // 缩放后的宽度
        const height = srcHeight // 缩放后的高度为设定值
        if (width > maxWidth) { // 如果缩放后的宽度超过了最大限制，则按比例缩小
            const scale = maxWidth / width
            return {
                width: Math.round(width * scale),
                height: Math.round(height * scale)
            }
        } else { // 否则直接返回缩放后的大小
            return {
                width: Math.round(width),
                height: Math.round(height)
            }
        }
    } else { // 不需要缩放，直接返回原始大小
        return {
            width: image.naturalWidth,
            height: image.naturalHeight
        }
    }
}