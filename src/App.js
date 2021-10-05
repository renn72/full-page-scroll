import { useState, useRef, useCallback, useEffect } from 'react'
import { gsap } from 'gsap'
import { Power3 } from 'gsap/gsap-core'
import { useSwipeable } from 'react-swipeable'
import './App.scss'
import ScrollIndicator from './components/ScrollIndicator'
import { ReactComponent as Left } from './assets/left.svg'
import { ReactComponent as Right } from './assets/right.svg'

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

  useEffect(() => {
    gsap.from(
      '.shop-title',
      {
        opacity: 0,
        x: 400,
        ease: Power3.easeOut,
        duration: 2.1,
        lazy: false,
        stagger: {
          amount: 0.4,
        },
      }
      // {
      //   opacity: 1,
      //   x: 0,
      //   ease: Power3.easeOut,
      //   duration: 3.8,
      //   stagger: {
      //     amount: 0.8,
      //   },
      // }
    )
  }, [])

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
          <section
            className={
              currentSlide === 0
                ? 'background up-scroll'
                : 'background down-scroll'
            }
          >
            <div className='content-wrapper'>
              {/* <div className='splash-wrapper'> */}
              <p className='content-title shop-title'>Poacher</p>
              <p className='content-title shop-title'>&</p>
              <p className='content-title shop-title'>Hound</p>
              {/* </div> */}
              <p className='content-subtitle'>
                Scroll down and up to see the effect!
              </p>
            </div>
          </section>
          <section
            className={
              currentSlide === 1
                ? 'background up-scroll'
                : 'background down-scroll'
            }
          >
            <div className='content-wrapper'>
              <div className='events-wrapper'>
                <Left height='6vh' />
                <div className='block'>
                  <p className='content-title'>I also do catering.</p>
                  <p className='content-subtitle'>yummy, yummy!</p>
                </div>
                <Right height='6vh' />
              </div>
            </div>
          </section>
          <section
            className={
              currentSlide === 2
                ? 'background up-scroll'
                : 'background down-scroll'
            }
          >
            <div className='content-wrapper'>
              <p className='content-title'>give me your money</p>
              <p className='content-subtitle'>please, I am desperate!</p>
            </div>
          </section>
        </div>
      </div>
      <ScrollIndicator currentSlide={currentSlide} />
    </div>
  )
}

export default App
