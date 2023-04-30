import React from 'react'
import Navbar from './Navbar'
import ZR from './pictures/ZR1.jpg'
import IR from './pictures/IR1.jpg'
// import About from './components/About'
// import Film from './pictures/sunsetfilm.jpg'
import { Parallax } from 'react-parallax'


const Home = () => {
  return (
    <>
        
      <Parallax bgImage={IR} blur={0} strength={-700}>
      <div style={{height: 1600,
     objectFit: 'cover'
     }}>
     <Navbar />
     <p><span>Creative Director/Designer</span></p>
     
  </div>
      </Parallax>
      <Parallax bgImage={ZR} blur={0} strength={-800}>
      <div style={{height: 1200,
     objectFit: 'cover'
     }}>
     
     
  </div>
      </Parallax>
      
      
    </>
  )
}

export default Home
