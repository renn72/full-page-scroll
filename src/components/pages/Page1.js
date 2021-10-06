import React from 'react'

export default function Page1({ className }) {
  return (
    <section className={className}>
      <div className='content-wrapper'>
        <p className='content-title shop-title'>Poacher</p>
        <p className='content-title shop-title'>&</p>
        <p className='content-title shop-title'>Hound</p>
        <p className='content-subtitle'>
          Scroll down and up to see the effect!
        </p>
      </div>
    </section>
  )
}
