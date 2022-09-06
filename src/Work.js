import React from 'react'
import Group1 from './pictures/Group1.jpg'
import Windmill from './pictures/windmill.jpg'
import Incense from  './pictures/incense.jpg'
import IR from './pictures/IR1.jpg'
import Stairs from './pictures/icecreamstairs.jpg'
import Bridge from './pictures/brooklynbridge.jpg'
import Bloom from './pictures/blooming.png'
import Lake from './pictures/southlake.jpg'
import Strut7 from './pictures/Strut7.jpg'
import Strut4 from './pictures/strut4.jpg'
import Strut3 from './pictures/strut14.jpg'
import Lexi from './pictures/sexylexi.jpg'
import Group6 from './pictures/Group6.jpg'

const Work = () => {
  return (
    <>
        <div>
  <section id='work'>
  <div className='works-title'>Selected Artworks</div>
        <div className='artworks'>
        <img className= 'shadow' src={Stairs} alt='blooms' />
        <img className= 'shadow' src={Bridge} alt='blooms' />
        <img className= 'shadow' src={Bloom} alt='blooms' />
        <img className= 'shadow' src={Strut3} alt='blooms' />
        <img className= 'shadow' src={Group6} alt='blooms' />
        <img className= 'shadow' src={Strut7} alt='blooms' />
        <img className= 'shadow' src={IR} alt='blooms' />
        <img className= 'shadow' src={Strut4} alt='blooms' />
        <img className= 'shadow' src={Group1} alt='blooms' />
        <img className= 'shadow' src={Lake} alt='bloom' />
        <img className= 'shadow' src={Incense} alt='blooms' />
        <img className= 'shadow' src={Windmill} alt='blooms' />
  </div>
  <div className='websites'>
          <p>Currently working on some projects so check back soon for some of my work. </p>
          <p>Here's a picture of Lexi the Corgi in the mean time </p>
          <div><img src={Lexi} alt ='alleghany' /></div>
        </div>
       
        
  </section>

</div>
</>
  )
}

export default Work;
