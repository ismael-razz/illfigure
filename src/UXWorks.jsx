import React from 'react'
// import Options from './components/Options';
// import Dating from './components/Dating';
// import Lexi from './pictures/sexylexi.jpg'
import UDown from './pictures/UDown.png'
import Win from './pictures/WinBobble.png'
import RN from './pictures/YNOTRN.png'

function UXWorks() {
  return (
    <>
  <section id='ux'>
  <p style={{textAlign:'center', marginTop: '3%'}}><span style={{fontSize: '120px', fontFamily:'Raleway, sans-serif', fontWeight:'bold', color:'#121212', textAlign:'center'}}>UX</span></p>

<div className='logos'>
  
  <div className='logo-container'>   <a href="https://tome.app/bruh-1e1/udown-dating-app-uxui-clguveifq0u4t3i40pbcjf7f4" target="_blank" rel="noopener noreferrer">
      <img className='logo' style={{ height: '80px', width:'100px', padding: '10px', marginRight:'40px'}} src= {UDown} alt='uDOwn' />
    </a></div>
 
 <div className='logo-container'> <a href="https://tome.app/bruh-1e1/win-meditation-app-uxui-clgv5pozj00wq8t40ibva0f4n" target="_blank" rel="noopener noreferrer">
      <img className='logo' style={{ height: '80px', width: '45px', marginRight:'55px'}} src= {Win} alt='W/in' />
    </a></div>
   <div className='logo-container'><a href="https://tome.app/bruh-1e1/ynotrn-creative-networking-app-uxui-clh4yjir804el2y3znkyplh8r" target="_blank" rel="noopener noreferrer">
      <img className='logo' style={{ height: ' 80px', width:'80px'}} src= {RN} alt='YNOTRN' />
    </a></div>
    
  </div>
</section>

</>
  )
}

export default UXWorks;
