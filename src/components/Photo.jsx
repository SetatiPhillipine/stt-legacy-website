import { useState } from 'react'

// Image with lazy loading and a quiet blueprint-style fallback
// shown until the real photo file is added to /public/images.
export default function Photo({ src, alt, eager = false, width, height, className = '' }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return <div className={`photo-fallback ${className}`} role="img" aria-label={alt} />
  }
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={eager ? 'high' : 'auto'}
      onError={() => {
        if (import.meta.env.DEV) console.warn(`[STT Legacy] Missing photo: ${src}. Add it to /public/images.`)
        setFailed(true)
      }}
    />
  )
}
