import { useState } from 'react'
import './App.scss'
import FullPageScroll from './components/FullPageScroll'
import Page1 from './components/pages/Page1'
import Page2 from './components/pages/Page2'
import Page3 from './components/pages/Page3'

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <div className='app'>
      <FullPageScroll
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      >
        <Page1
          className={
            currentSlide === 0
              ? 'background up-scroll'
              : 'background down-scroll'
          }
        />

        <Page2
          className={
            currentSlide === 1
              ? 'background up-scroll'
              : 'background down-scroll'
          }
        />

        <Page3
          className={
            currentSlide === 2
              ? 'background up-scroll'
              : 'background down-scroll'
          }
        />
      </FullPageScroll>
    </div>
  )
}

export default App
