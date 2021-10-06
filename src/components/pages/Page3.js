import React from 'react'
import './Pages.scss'

import background from '../../images/3.jpg'

export default function Page3({ className }) {
  return (
    <section
      className={'page-3 ' + className}
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className=' page-3-wrapper '>
        <iframe
          title='map'
          src='https://maps.google.com/maps?q=poacher%20and%20hound&t=&z=15&ie=UTF8&iwloc=&output=embed'
          width='100%'
          height='100%'
          style={{ border: 0 }}
        />

        <div className=' page-3-contact-wrapper'>
          <p className='content-title'>Contact Me</p>
        </div>
      </div>
    </section>
  )
}
