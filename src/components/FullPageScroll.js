import { useRef } from 'react'
import { useSwipeable } from 'react-swipeable'
import '../App.scss'
import ScrollIndicator from './ScrollIndicator'
import useScrollListener from '../hooks/useScrollListener'

export default function FullPageScroll({
  children,
  currentSlide,
  setCurrentSlide,
}) {
  const containerRef = useRef(null)

  const totalSlideNumber = children.length

  // useEffect(() => {
  //   gsap.from(
  //     '.shop-title',
  //     {
  //       opacity: 0,
  //       x: 400,
  //       ease: Power3.easeOut,
  //       duration: 2.1,
  //       lazy: false,
  //       stagger: {
  //         amount: 0.4,
  //       },
  //     }
  //     // {
  //     //   opacity: 1,
  //     //   x: 0,
  //     //   ease: Power3.easeOut,
  //     //   duration: 3.8,
  //     //   stagger: {
  //     //     amount: 0.8,
  //     //   },
  //     // }
  //   )
  // }, [])

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
