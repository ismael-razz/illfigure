import React, { useEffect, useRef } from 'react'
import Group1 from './pictures/Group1.jpg'
import IR from './pictures/IR1.jpg'
import Strut7 from './pictures/Strut7.jpg'
import Strut4 from './pictures/strut4.jpg'
import Strut3 from './pictures/strut14.jpg'
import Group6 from './pictures/Group6.jpg'
import ZR from './pictures/ZR1.jpg'
// import Windmill from './pictures/windmill.jpg'
// import Incense from  './pictures/incense.jpg'
// import Stairs from './pictures/icecreamstairs.jpg'
// import Bridge from './pictures/brooklynbridge.jpg'
// import Bloom from './pictures/blooming.png'
// import Lake from './pictures/southlake.jpg'


const Work = () => {
  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-up");
          }
        });
      },
      { rootMargin: "0px 0px -100px 0px" } // only trigger when image is 100px away from viewport bottom
    )
  );

  useEffect(() => {
    const images = document.querySelectorAll(".artworks img");
    images.forEach((image) => observer.current.observe(image));
  }, []);

  return (
    <>
      <section id="work">
        <div className="works-title">Selected Artworks</div>
        <div className="artworks">
          <img className="shadow" src={Strut3} alt="blooms" />
          <img className="shadow" src={Group6} alt="blooms" />
          <img className="shadow" src={Strut7} alt="blooms" />
          <img className="shadow" src={IR} alt="blooms" />
          <img className="shadow" src={Group1} alt="blooms" />
          <img className="shadow" src={Strut4} alt="blooms" />
          <img className="shadow" src={ZR} alt="blooms" />
         
        </div>
      </section>
    </>
  );
};

export default Work;


/* <img className= 'shadow' src={Stairs} alt='blooms' />
        <img className= 'shadow' src={Bridge} alt='blooms' />
        <img className= 'shadow' src={Bloom} alt='blooms' /> */
        