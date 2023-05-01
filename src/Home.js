import React from 'react'
// import Navbar from './Navbar'
import ZR from './pictures/ZR1.jpg'
import IR from './pictures/IR1.jpg'
import Group from './pictures/Group1.jpg'
// import About from './components/About'
import Film from './pictures/sunsetfilm.jpg'
import { Parallax } from 'react-parallax'
import UXWorks from './UXWorks'
import Footer from './Footer'


const Home = () => {
  return (
    <>
        
      <Parallax bgImage={IR} blur={0} strength={-700}>
      <div style={{height: 1600,
     objectFit: 'cover'
     }}>
     
     <p style={{textAlign:'center', marginTop: '5%'}}><span style={{fontSize: '100px', fontFamily:'Sansita Swashed, cursive ', fontWeight:'bold', textAlign:'center'}}>Creative Director/Designer</span></p>
     
  </div>
      </Parallax>
      <Parallax bgImage={ZR} blur={0} strength={-800}>
      <div style={{height: 1200,
     objectFit: 'cover'
     }}>
     
     
  </div>
      </Parallax>
      <UXWorks />
      
      <Parallax bgImage={Group} blur={0} strength={200}>
      <div style={{height: 500,
     objectFit: 'cover'
     }}>
     <Footer />
     
  </div>
      </Parallax>
      
      
    </>
  )
}

export default Home
