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
  <div className='works-title'>Design</div>
  <div className='logos'>
  <div>   <a href="https://docs.google.com/presentation/d/17j5QQc8b1xvgg2mJ74FsqKLe79I07I-l0E5m1dMgl6c/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
      <img className='logo' style={{ height: '80px', width:'100px', padding: '10px', marginRight:'40px'}} src= {UDown} alt='uDOwn' />
    </a></div>
 
 <div> <a href="https://docs.google.com/presentation/d/1jnL6jYSoKs7ow9bMJqabfQFGyA7U7i7i9tsvsSn9rus/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
      <img className='logo' style={{ height: ' 75px', width: '45px', marginRight:'55px'}} src= {Win} alt='W/in' />
    </a></div>
   <div><a href="https://docs.google.com/presentation/d/17j5QQc8b1xvgg2mJ74FsqKLe79I07I-l0E5m1dMgl6c/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
      <img className='logo' style={{ height: ' 80px', width:'80px'}} src= {RN} alt='YNOTRN' />
    </a></div>
    
  </div>
</section>

</>
  )
}

export default UXWorks;
