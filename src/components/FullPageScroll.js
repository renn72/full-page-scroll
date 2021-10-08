import { useEffect, useRef } from 'react'
import { useSwipeable } from 'react-swipeable'
import '../App.scss'
import ScrollIndicator from './ScrollIndicator'
import useScrollListener from '../hooks/useScrollListener'
import gsap from 'gsap'

export default function FullPageScroll({
  children,
  currentSlide,
  setCurrentSlide,
}) {
  const containerRef = useRef(null)

  const totalSlideNumber = children.length

  const handleScroll = (e) => {
    if (e.wheelDelta < 0) {
      if (currentSlide < totalSlideNumber - 1) {
        setCurrentSlide((c) => c + 1)
      }
    } else {
      if (currentSlide > 0) {
        setCurrentSlide((c) => c - 1)
      }
    }
  }

  const handleKeyPress = (e) => {
    const { key } = e
    if (key === 'ArrowDown' || key === 'PageDown') {
      if (currentSlide < totalSlideNumber - 1) {
        setCurrentSlide((c) => c + 1)
      }
    } else if (key === 'ArrowUp' || key === 'PageUp') {
      if (currentSlide > 0) {
        setCurrentSlide((c) => c - 1)
      }
    }
  }

  const handleSwipe = (e) => {
    const { dir } = e

    if (dir === 'Up') {
      if (currentSlide < totalSlideNumber - 1) {
        setCurrentSlide((c) => c + 1)
      }
    } else if (dir === 'Down') {
      if (currentSlide > 0) {
        setCurrentSlide((c) => c - 1)
      }
    }
  }

  const swipeHandler = useSwipeable({
    onSwiped: handleSwipe,
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: true,
  })

  useScrollListener(containerRef, handleScroll, 'wheel')
  useScrollListener(containerRef, handleKeyPress, 'keydown')

  useEffect(() => {
    gsap.from('.container', {
      autoAlpha: 0,
    })
  }, [])

  return (
    <div>
      <div {...swipeHandler}>
        <div ref={containerRef} className='container'>
          {children}
        </div>
      </div>
      <ScrollIndicator currentSlide={currentSlide} />
    </div>
  )
}
