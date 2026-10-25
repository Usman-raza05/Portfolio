import { useEffect, useState } from 'react'

// Returns only the image URLs that actually load, so missing screenshots never render.
export default function useAvailableImages(urls = []) {
  const key = urls.join('|')
  const [ok, setOk] = useState([])
  useEffect(() => {
    let live = true
    Promise.all(
      urls.map((u) => new Promise((res) => { const i = new Image(); i.onload = () => res(u); i.onerror = () => res(null); i.src = u }))
    ).then((r) => live && setOk(r.filter(Boolean)))
    return () => { live = false }
  }, [key]) // eslint-disable-line react-hooks/exhaustive-deps
  return ok
}