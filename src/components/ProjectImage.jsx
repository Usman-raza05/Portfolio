import { useState } from 'react'

const ratio = { landscape: 'aspect-[16/10]', phone: 'aspect-[9/16]', certificate: 'aspect-[4/3]' }

function Frame({ device, children }) {
  if (device === 'phone') {
    return <div className="grid aspect-[9/17] h-[78%] place-items-center rounded-[1.25rem] border border-white/15 bg-white/[0.02] px-2 text-center">{children}</div>
  }
  if (device === 'desktop') {
    return (
      <div className="w-[78%] overflow-hidden rounded-lg border border-white/15 bg-white/[0.02]">
        <div className="flex gap-1.5 border-b border-white/10 px-3 py-2">
          {[0, 1, 2].map((i) => <span key={i} className="h-1.5 w-1.5 rounded-full bg-white/20" />)}
        </div>
        <div className="px-3 py-6 text-center">{children}</div>
      </div>
    )
  }
  return <div className="p-4 text-center">{children}</div>
}

// One component for every project/certificate image: fixed aspect ratio (no layout shift),
// themed placeholder when the file is missing, and a graceful swap if the image fails to load.
export default function ProjectImage({ src, alt, label, sub, kind = 'landscape', device, size = 'lg', fit = 'cover', eager = false }) {
  const [failed, setFailed] = useState(!src)
  const small = size === 'sm'
  return (
    <div className={`relative w-full overflow-hidden ${ratio[kind] || ratio.landscape}`}>
      {failed ? (
        <div role="img" aria-label={`${label} image placeholder`}
          className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_30%_20%,rgba(139,255,176,0.12),transparent_60%)] transition duration-700 group-hover:scale-[1.03]">
          <Frame device={device}>
            <p className={`font-display font-semibold text-white/15 ${small ? 'text-lg' : 'text-2xl sm:text-5xl'}`}>{label}</p>
            {sub && <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-mute">{sub}</p>}
          </Frame>
        </div>
      ) : (
        <img src={src} alt={alt || `${label} preview`} loading={eager ? 'eager' : 'lazy'} decoding="async" onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full transition duration-700 group-hover:scale-[1.04] ${fit === 'contain' ? 'object-contain' : 'object-cover'}`} />
      )}
    </div>
  )
}