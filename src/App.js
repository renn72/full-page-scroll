import { useState, useRef, useCallback, useEffect } from 'react'
import './App.scss'

const useScrollListener = (element, handleScroll, throttle = 1000) => {
  const scrollingTimer = useRef()
  const listenToScroll = useCallback(
    (e) => {
      element.current?.removeEventListener('wheel', listenToScroll) // unregister the event
      clearTimeout(scrollingTimer.current) // clear previous timeout instance
      scrollingTimer.current = setTimeout(
        () => element.current?.addEventListener('wheel', listenToScroll), // re-register the event after a certain time
        throttle
      )
      handleScroll(e) // call the handler logic (this is async and will not wait for the setTimeout to run!)
    },
    [throttle, element, handleScroll]
  )

  useEffect(() => {
    const currentElement = element.current
    if (currentElement) {
      currentElement.addEventListener('wheel', listenToScroll)
    }
    return () => {
      currentElement?.removeEventListener('wheel', listenToScroll)
      clearTimeout(scrollingTimer.current)
    }
  }, [listenToScroll, element])
}

function App() {
  // const scrollSensitivitySetting = 30
  // const slideDurationSetting = 600

  const [currentSlide, setCurrentSlide] = useState(0)
  const containerRef = useRef(null)

  const totalSlideNumber = 3

  console.log('main loop ' + currentSlide)

  // const scrollUp = () => {
  //   if (currentSlide < totalSlideNumber) {
  //     console.log('callback ' + currentSlide)
  //     console.log('down')
  //     setCurrentSlide((c) => c + 1)
  //   }
  // }

  const handleScroll = (e) => {
    console.log('scroll')
    console.log(e)
    console.log('callback ' + currentSlide)
    if (e.wheelDelta < 0) {
      if (currentSlide < totalSlideNumber - 1) {
        console.log('down')
        setCurrentSlide(currentSlide + 1)
      }
    } else {
      if (currentSlide > 0) {
        console.log('up')
        setCurrentSlide(currentSlide - 1)
      }
    }
  }

  useScrollListener(containerRef, handleScroll)

  return (
    <div ref={containerRef} className='container'>
      <section
        className={
          currentSlide === 0 ? 'background up-scroll' : 'background down-scroll'
        }
      >
        <div className='content-wrapper'>
          <p className='content-title'>Full Page Parallax Effect</p>
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
          <p className='content-title'>Cras lacinia non eros nec semper.</p>
          <p className='content-subtitle'>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Cras ut massa mattis nibh semper pretium.
          </p>
        </div>
      </section>
      <section
        className={
          currentSlide === 2 ? 'background up-scroll' : 'background down-scroll'
        }
      >
        <div className='content-wrapper'>
          <p className='content-title'>Etiam consequat lectus.</p>
          <p className='content-subtitle'>
            Nullam tristique urna sed tellus ornare congue. Etiam vitae erat at
            nibh aliquam dapibus.
          </p>
        </div>
      </section>
    </div>
  )
}

export default App
