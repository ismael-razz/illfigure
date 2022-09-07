import React from 'react'
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
     <div className='navbar'>
      <nav>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#work'>Works</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </nav>
     </div>
     <div className='welcome'>
     <MovingComponent
     type="fadeOut"
  duration="1000ms"
  delay="2s"
  direction="normal"
  timing="ease"
  iteration="1"
  fillMode="forwards">Hey There</MovingComponent>
  <MovingComponent
    type="fadeOut"
  duration="2000ms"
  delay="2s"
  direction="reverse"
  timing="ease"
  iteration="1"
  fillMode="forwards">
    <div className='name'> <h1>I'm Ismael</h1></div> </MovingComponent></div>
  </div>

      </Parallax>
    </>
  )
}

export default Home
