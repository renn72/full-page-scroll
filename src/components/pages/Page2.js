import React from 'react'

import background from '../../images/2-1.webp'

import { ReactComponent as Left } from '../../assets/left.svg'
import { ReactComponent as Right } from '../../assets/right.svg'

export default function Page2({ className }) {
  return (
    <section
      className={className}
      style={{ backgroundImage: `url(${background})` }}
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
  )
}
