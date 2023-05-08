import React from 'react'
// import Navbar from './Navbar'
// import ZR from './pictures/ZR1.jpg'
import IR from './pictures/IR1.jpg'
import Group from './pictures/Group1.jpg'

// import About from './components/About'
// import Film from './pictures/sunsetfilm.jpg'
import { Parallax } from 'react-parallax'
import UXWorks from './UXWorks'
import Footer from './Footer'
import Gallery from './components/Gallery'
import Email from './components/Email'
// import About from './components/About'

const Home = () => {
  return (
    <>
        
      <Parallax bgImage={IR} blur={4} strength={-700}>
      <div style={{height: 1250,
     objectFit: 'cover'
     }}>
     

     <p style={{textAlign:'center', margin: '10px'}}><span style={{fontSize: '140px', fontFamily:'Raleway, sans-serif', fontWeight:'bold', textAlign:'center', color: '#f8f8f8'}}>A VISUAL EXPERIENCE</span></p>
     <p style={{textAlign:'center', margin: '10px'}}><span style={{fontSize: '140px', fontFamily:'Raleway, sans-serif', fontWeight:'bold', textAlign:'center'}}>A VISUAL EXPERIENCE</span></p>
     <p style={{textAlign:'center', margin: '10px'}}><span style={{fontSize: '140px', fontFamily:'Raleway, sans-serif', fontWeight:'bold', textAlign:'center', color: '#f8f8f8'}}>A VISUAL EXPERIENCE</span></p>
     <p style={{textAlign:'center', margin: '10px'}}><span style={{fontSize: '140px', fontFamily:'Raleway, sans-serif', fontWeight:'bold', textAlign:'center'}}>A VISUAL EXPERIENCE</span></p>
     <p style={{textAlign:'center', margin: '10px'}}><span style={{fontSize: '140px', fontFamily:'Raleway, sans-serif', fontWeight:'bold', textAlign:'center', color: '#f8f8f8'}}>A VISUAL EXPERIENCE</span></p>
     <p style={{textAlign:'center'}}><span style={{fontSize: '140px', fontFamily:'Raleway, sans-serif', fontWeight:'bold', textAlign:'center'}}>A VISUAL EXPERIENCE</span></p>
     <p style={{textAlign:'center'}}><span style={{fontSize: '140px', fontFamily:'Raleway, sans-serif', fontWeight:'bold', textAlign:'center', color: '#f8f8f8'}}>A VISUAL EXPERIENCE</span></p>
     
 
     
  </div>
      </Parallax>
      
      <p style={{textAlign:'center', margin: '2%'}}><span style={{fontSize: '140px', fontFamily:'Raleway, sans-serif', fontWeight:'bold', textAlign:'center'}}>CREATIVE DIRECTOR</span></p>
      {/* <p style={{textAlign:'center', marginTop: '2%'}}><span style={{fontSize: '160px', fontFamily:'Raleway, sans-serif', fontWeight:'bold', textAlign:'center', color: 'white'}}>GALLERY</span></p> */}
      
      {/* <Parallax bgImage={ZR} blur={2} strength={-800}>
      <div style={{height: 1400,
     objectFit: 'cover'
     }}>
      <div>
      
           

      </div>
      
     
  </div>

      </Parallax> */}
      
      <div style={{ background: '#333'}}>
      <Gallery />
      </div>
      
      
      <p style={{textAlign:'center', marginTop: '2%'}}><span style={{fontSize: '160px', fontFamily:'Raleway, sans-serif', fontWeight:'bold', textAlign:'center', animation: 'change-colors 5s infinite'}}>DESIGN</span></p>
      <p style={{textAlign:'center', marginTop: '2%'}}><span style={{fontSize: '80px', fontFamily:'Raleway, sans-serif', fontWeight:'bold', textAlign:'center'}}>WORKS</span></p>
      
      <UXWorks />
      <Parallax bgImage={Group} blur={1} strength={200}>
      <div style={{height: 200,
     objectFit: 'cover'
     }}>
     
    
     
  </div>
  <p style={{textAlign:'center'}}><span style={{fontSize: '80px', fontFamily:'Raleway, sans-serif', fontWeight:'bold', textAlign:'center', color: 'white'}}>Ismael is my name</span></p>
  <p style={{textAlign:'center', margin: '3%'}}><span style={{fontSize: '50px', fontFamily:'Raleway, sans-serif', fontWeight:'bold', textAlign:'center', color: 'white'}}>Providing you a different way to see me</span></p>
   <Email />
  <Footer />
      </Parallax>
      
      
    </>
  )
}

export default Home
