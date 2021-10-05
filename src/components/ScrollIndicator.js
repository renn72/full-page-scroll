import React, { useEffect } from 'react'
import styled from 'styled-components'
import { gsap } from 'gsap'
import { Power3 } from 'gsap/gsap-core'

const CircleContainer = styled.div`
  position: absolute;
  z-index: 10;
  height: 98vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 1rem;
  overflow: hidden;
  pointer-events: none;
`

const Circle = styled.div`
  width: 0.4rem;
  height: 0.4rem;
  opacity: 70%;
  border-radius: 100%;
  background-color: #51a0fd;
  align-items: center;
  margin-right: 1rem;
`

export default function ScrollIndicator({ currentSlide }) {
  const expand = (slide) => {
    gsap.to('.circle', {
      width: '0.4rem',
      height: '0.4rem',
      duration: 0.4,
    })

    gsap.to(`.${slide}`, {
      width: '0.7rem',
      height: '0.7rem',
      duration: 0.4,
    })
  }

  useEffect(() => {
    gsap.from('.circle', {
      // ref, or a className
      opacity: 0,
      x: -40,
      ease: Power3.easeOut,
      duration: 0.8,
      stagger: {
        amount: 0.2,
      },
    })
  }, [])

  useEffect(() => {
    if (currentSlide === 0) {
      expand('one')
    } else if (currentSlide === 1) {
      expand('two')
    } else if (currentSlide === 2) {
      expand('three')
    }
  }, [currentSlide])

  return (
    <CircleContainer>
      <Circle className='circle one' />
      <Circle className='circle two' />
      <Circle className='circle three' />
    </CircleContainer>
  )
}
