import { useEffect, useCallback, useState } from 'react'

export default function useScrollListener(
  element,
  handleScroll,
  eventType = 'wheel',
  throttle = 500
) {
  const [isScrolling, setIsScrolling] = useState(false)

  const listenToScroll = useCallback(
    (e) => {
      if (!isScrolling) {
        handleScroll(e)
        setIsScrolling(true)
        setTimeout(() => setIsScrolling(false), throttle)
      }
    },
    [throttle, handleScroll, isScrolling]
  )

  useEffect(() => {
    const currentElement = element.current
    if (currentElement) {
      window.addEventListener(eventType, listenToScroll, false, {
        passive: true,
      })
    }
    return () => {
      window?.removeEventListener(eventType, listenToScroll)
    }
  }, [listenToScroll, element, eventType])
}
