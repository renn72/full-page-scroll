import { useState, useRef, useCallback, useEffect } from 'react'
import { useSwipeable } from 'react-swipeable'
import './App.scss'

const useScrollListener = (
  element,
  handleScroll,
  eventType = 'wheel',
  throttle = 600
) => {
  // const scrollingTimer = useRef()
  const [isScrolling, setIsScrolling] = useState(false)

  const listenToScroll = useCallback(
    (e) => {
      if (!isScrolling) {
        handleScroll(e) // call the handler logic (this is async and will not wait for the setTimeout to run!)
        setIsScrolling(true)
        setTimeout(() => setIsScrolling(false), throttle)
      }
    },
    [throttle, handleScroll, isScrolling]
  )

  useEffect(() => {
    const currentElement = element.current
    if (currentElement) {
      window.addEventListener(eventType, listenToScroll, false)
    }
    return () => {
      window?.removeEventListener(eventType, listenToScroll)
    }
  }, [listenToScroll, element, eventType])
}

function App() {
  // const scrollSensitivitySetting = 30
  // const slideDurationSetting = 600

  const [currentSlide, setCurrentSlide] = useState(0)
  const containerRef = useRef(null)

  const totalSlideNumber = 3

  console.log('main loop ' + currentSlide)

  const handleScroll = (e) => {
    console.log('scroll')
    console.log(e)
    if (e.wheelDelta < 0) {
      if (currentSlide < totalSlideNumber - 1) {
        console.log('down')
        setCurrentSlide((c) => c + 1)
      }
    } else {
      if (currentSlide > 0) {
        console.log('up')
        setCurrentSlide((c) => c - 1)
      }
    }
  }

  const handleKeyPress = (e) => {
    const { key } = e
    if (key === 'ArrowDown' || key === 'PageDown') {
      if (currentSlide < totalSlideNumber - 1) {
        console.log('down')
        setCurrentSlide((c) => c + 1)
      }
    } else if (key === 'ArrowUp' || key === 'PageUp') {
      if (currentSlide > 0) {
        console.log('up')
        setCurrentSlide((c) => c - 1)
      }
    }
  }

  const handleSwipe = (e) => {
    const { dir } = e

    if (dir === 'Down') {
      if (currentSlide < totalSlideNumber - 1) {
        console.log('down')
        setCurrentSlide((c) => c + 1)
      }
    } else if (dir === 'Up') {
      if (currentSlide > 0) {
        console.log('up')
        setCurrentSlide((c) => c - 1)
      }
    }
  }

  const swipeHandler = useSwipeable({
    onSwiped: handleSwipe,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  })

  useScrollListener(containerRef, handleScroll, 'wheel')
  useScrollListener(containerRef, handleKeyPress, 'keydown')

  return (
    <div {...swipeHandler} ref={containerRef} className='container'>
      <section
        className={
          currentSlide === 0 ? 'background up-scroll' : 'background down-scroll'
        }
      >
        <div className='content-wrapper'>
          <p className='content-title'>I'm a hipster cafe</p>
          <p className='content-subtitle'>
            Scroll down and up to see the effect!
          </p>
        </div>
      </section>
      <section
        className={
          currentSlide === 1 ? 'background up-scroll' : 'background down-scroll'
        }
      >
        <div className='content-wrapper'>
          <p className='content-title'>I also do catering</p>
          <p className='content-subtitle'>yummy, yummy</p>
        </div>
      </section>
      <section
        className={
          currentSlide === 2 ? 'background up-scroll' : 'background down-scroll'
        }
      >
        <div className='content-wrapper'>
          <p className='content-title'>come and give me your money</p>
          <p className='content-subtitle'>please, I am desperate</p>
        </div>
      </section>
    </div>
  )
}

export default App
