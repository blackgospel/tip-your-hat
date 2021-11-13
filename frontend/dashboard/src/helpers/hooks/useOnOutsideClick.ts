import { useEffect, useRef } from 'react'

const useOnOutsideClick = (
  handler: (event: MouseEvent | TouchEvent) => void
) => {
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref?.current

      if (!el || el.contains(event.target as Node)) return

      handler(event)
    }

    document.addEventListener(`mousedown`, listener)
    document.addEventListener(`touchstart`, listener)

    return () => {
      document.removeEventListener(`mousedown`, listener)
      document.removeEventListener(`touchstart`, listener)
    }
  }, [ref, handler])

  return ref
}

export default useOnOutsideClick
