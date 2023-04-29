import React from 'react'
import Navbar from './Navbar'
import Film from './pictures/sunsetfilm.jpg'
import { Parallax } from 'react-parallax'
import MovingComponent from 'react-moving-text'

const Home = () => {
  return (
    <>
        
      <Parallax bgImage={Film} blur={0} strength={-400}>
      <div style={{height: 800,
     objectFit: 'cover'
     }}>
     <Navbar />
  <MovingComponent
    type="fadeOut"
  duration="2000ms"
  delay="2s"
  direction="reverse"
  timing="ease"
  iteration="1"
  fillMode="forwards">
    <div className='name'> <h1>I'm Ismael</h1></div> </MovingComponent></div>
  

      </Parallax>
    </>
  )
}

export default Home
