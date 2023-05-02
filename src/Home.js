import React from 'react'
// import Navbar from './Navbar'
import ZR from './pictures/ZR1.jpg'
import IR from './pictures/IR1.jpg'
import Group from './pictures/Group1.jpg'
// import About from './components/About'
// import Film from './pictures/sunsetfilm.jpg'
import { Parallax } from 'react-parallax'
import UXWorks from './UXWorks'
import Footer from './Footer'
// import About from './components/About'

const Home = () => {
  return (
    <>
        
      <Parallax bgImage={IR} blur={0} strength={-700}>
      <div style={{height: 1250,
     objectFit: 'cover'
     }}>
     

     <p style={{textAlign:'center', margin: '10px'}}><span style={{fontSize: '160px', fontFamily:'Raleway, sans-serif', fontWeight:'bold', textAlign:'center'}}>A Visual Experience</span></p>
     <p style={{textAlign:'center', margin: '10px'}}><span style={{fontSize: '160px', fontFamily:'Raleway, sans-serif', fontWeight:'bold', textAlign:'center', color: '#f8f8f8'}}>A Visual Experience</span></p>
     <p style={{textAlign:'center', margin: '10px'}}><span style={{fontSize: '160px', fontFamily:'Raleway, sans-serif', fontWeight:'bold', textAlign:'center'}}>A Visual Experience</span></p>
     <p style={{textAlign:'center', margin: '10px'}}><span style={{fontSize: '160px', fontFamily:'Raleway, sans-serif', fontWeight:'bold', textAlign:'center', color: '#f8f8f8'}}>A Visual Experience</span></p>
     <p style={{textAlign:'center', margin: '10px'}}><span style={{fontSize: '160px', fontFamily:'Raleway, sans-serif', fontWeight:'bold', textAlign:'center'}}>A Visual Experience</span></p>
     <p style={{textAlign:'center'}}><span style={{fontSize: '160px', fontFamily:'Raleway, sans-serif', fontWeight:'bold', textAlign:'center', color: '#f8f8f8'}}>A Visual Experience</span></p>
     
 
     
  </div>
      </Parallax>
      
      <p style={{textAlign:'center', marginTop: '2%'}}><span style={{fontSize: '160px', fontFamily:'Raleway, sans-serif', fontWeight:'bold', textAlign:'center'}}>Creative Director</span></p>
      
      <Parallax bgImage={ZR} blur={0} strength={-800}>
      <div style={{height: 1200,
     objectFit: 'cover'
     }}>
           
     
  </div>
      </Parallax>
      <p style={{textAlign:'center', marginTop: '2%'}}><span style={{fontSize: '160px', fontFamily:'Raleway, sans-serif', fontWeight:'bold', textAlign:'center', animation: 'change-colors 5s infinite'}}>Artistic Designer</span></p>
      <p style={{textAlign:'center', marginTop: '2%'}}><span style={{fontSize: '80px', fontFamily:'Raleway, sans-serif', fontWeight:'bold', textAlign:'center'}}>Check out my works</span></p>
      
      <UXWorks />
      <Parallax bgImage={Group} blur={0} strength={200}>
      <div style={{height: 500,
     objectFit: 'cover'
     }}>
     
     
     
  </div>
  <Footer />
      </Parallax>
      
      
    </>
  )
}

export default Home
