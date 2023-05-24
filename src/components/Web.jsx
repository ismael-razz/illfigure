import React from 'react'

import calspan from '../pictures/CALSPAN.PNG'
import mattel from '../pictures/MATTEL.PNG'
import elder from '../pictures/ELDER.PNG'
import moog from '../pictures/MOOG.PNG'
import mighty from '../pictures/MIGHTY.PNG'
import ninja from '../pictures/NINJA.PNG'
import sgroi from '../pictures/SGROI.PNG'
import shark from '../pictures/SHARK.PNG'


function Web() {

 

    return (
        <>
        
         <p style={{textAlign:'center', marginTop: '2%'}}><span style={{fontSize: '120px', fontFamily:'Raleway, sans-serif', fontWeight:'bold', color:'#121212', textAlign:'center'}}>AGENCY WORKS</span></p>
         <div class="main-content">
  <div class="portfolio">
    <div class="img-container">
      <a href="https://calspan.com/" target="_blank" rel="noopener noreferrer">
        <img src={calspan} alt="calspan" class="web-img" />
        <p class="img-text">Calspan</p>
      </a>
    </div>
    <div class="img-container">
      <a href="https://shop.mattel.com/" target="_blank" rel="noopener noreferrer">
        <img src={mattel} alt="mattel" class="web-img" />
        <p class="img-text">Mattel</p>
      </a>
    </div>
    <div class="img-container">
      <a href="https://www.elderwood.com/" target="_blank" rel="noopener noreferrer">
        <img src={elder} alt="elder" class="web-img" />
        <p class="img-text">Elderwood Nursing</p>
      </a>
    </div>
    <div class="img-container">
      <a href="https://www.moog.com/" target="_blank" rel="noopener noreferrer">
        <img src={moog} alt="moog" class="web-img" />
        <p class="img-text">MOOG</p>
      </a>
    </div>
    <div class="img-container">
      <a href="https://www.mightytaco.com/" target="_blank" rel="noopener noreferrer">
        <img src={mighty} alt="mighty" class="web-img" />
        <p class="img-text">Mighty Taco</p>
      </a>
    </div>
    <div class="img-container">
      <a href="https://www.ninjakitchen.com/?clickid=WZaU6M24QzXmWlg0twRE31CUUkASVcQWI3lvVQ0&irgwc=1&utm_source=impact&utm_medium=affiliate&utm_campaign=-2003851-&afsrc=1" target="_blank" rel="noopener noreferrer">
        <img src={ninja} alt="ninja" class="web-img" />
        <p class="img-text">Ninja Kitchen</p>
      </a>
    </div>
    <div class="img-container">
      <a href="https://sgroifinancial.com/" target="_blank" rel="noopener noreferrer">
        <img src={sgroi} alt="sgroi" class="web-img" />
        <p class="img-text">Sgroi Financial</p>
      </a>
    </div>
    <div class="img-container">
      <a href="https://www.sharkninja.com/" target="_blank" rel="noopener noreferrer">
        <img src={shark} alt="shark" class="web-img" />
        <p class="img-text">Shark Clean</p>
      </a>
    </div>
  </div>
</div>

            
         
        </>
      )
}

export default Web
