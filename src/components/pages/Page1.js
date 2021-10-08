import React, { useEffect } from 'react'
import gsap from 'gsap'
import { Power3 } from 'gsap/gsap-core'

import background from '../../images/1-1.webp'

export default function Page1({ className }) {
  useEffect(() => {
    gsap.from('.shop-title-1', {
      delay: 0.1,
      opacity: 0,
      x: 1200,
      ease: Power3.easeOut,
      duration: 3.1,
    })
    gsap.from('.shop-title-2', {
      delay: 0.3,
      opacity: 0,
      ease: Power3.easeIn,
      duration: 3.1,
    })
    gsap.from('.shop-title-3', {
      delay: 0.5,
      opacity: 0,
      x: -1200,
      ease: Power3.easeOut,
      duration: 3.1,
    })
  }, [])

  return (
    <section
      className={className}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className='content-wrapper'>
        <p className='content-title shop-title shop-title-1'>Poacher</p>
        <p className='content-title shop-title shop-title-2'>&</p>
        <p className='content-title shop-title shop-title-3'>Hound</p>
        <p className='content-subtitle'>
          Scroll down and up to see the effect!
        </p>
      </div>
    </section>
  )
}
