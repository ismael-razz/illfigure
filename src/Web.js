import React from 'react'
import STRUT2 from './components/strut12.jpg'
import STRUT3 from './components/strut14.jpg'
import GROUP1 from './components/Group1.jpg'
import GROUP6 from './components/Group6.jpg'
import GIRLZ2 from './components/GIRLZ2.jpg'
import BULA from './components/BULA.PNG'
import FALCON from './components/FALCON.PNG'
import TACO from './components/TACO.PNG'


export default function Web() {
  return (
    <div className='webwork'>
    <section className='webs'>
          <div className='selected'>Selected Artworks</div>
      <div className='row' >
      
      </div>
      <div className='column'>
        <img className='web' src={GROUP1} alt='group5'></img>
      </div>
      
      <div className='column'>
        <img className='web' src={STRUT2} alt='strut1'></img>
      </div>
     
      <div className='column'>
      <a href='https://www.bulapools.com/' target="_blank" rel="noopener noreferrer">
      <img className='web' src= {BULA} alt="bulapools"></img>
      </a>
      <div className='column'>
        <img className='web' src={GROUP6} alt='group6'></img>
      </div>
      <div className='column'>
      <a href='https://www.tacoolefamily.com/' target="_blank" rel="noopener noreferrer">
      <img className='web' src= {TACO} alt="tacoole"></img>
      </a>
      </div>

      <div className='column'>
        <img className='web' src={STRUT3} alt='strut1'></img>
      </div>
      <div className='column'>

      <a href='https://www.buildwithfalcon.com/' target="_blank" rel="noopener noreferrer">
      <img className='web' src= {FALCON} alt="falcon"></img>
      </a>
      </div>
      <div className='column'>
        <img className='web' src={GIRLZ2} alt='girlz2'></img>
      </div>

        </div>
        </section>
    </div>
  )
}
