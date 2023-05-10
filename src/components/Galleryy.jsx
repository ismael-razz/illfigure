import React from 'react'
import Masonry from 'react-masonry-css';
import and1 from '../pictures/andrew1.jpeg'
import and2 from '../pictures/andrew2.jpeg'
import and3 from '../pictures/andrew3.jpeg'
import and4 from '../pictures/andrew4.jpeg'
import joe1 from '../pictures/joe1.jpeg'
import joe2 from '../pictures/joe2.jpeg'
// import joe3 from '../pictures/joe3.jpeg'
import joe4 from '../pictures/joe4.jpeg'
import group1 from '../pictures/Group1.jpg'
import group6 from '../pictures/Group6.jpg'
import group4 from '../pictures/Group4.jpg'
import group5 from '../pictures/Group5.jpg'
import ir1 from '../pictures/IR1.jpg'
import ir2 from '../pictures/IR2.jpg'
import zr from '../pictures/ZR1.jpg'
// import zr2 from '../pictures/zr2.jpg'
// import zr3 from '../pictures/zr3.jpg'
// import strut4 from '../pictures/strut4.jpg'
import strut7 from '../pictures/Strut7.jpg'
// import strut11 from '../pictures/strut11.jpg'
import strut12 from '../pictures/strut12.jpg'
import strut14 from '../pictures/strut14.jpg'
import strut15 from '../pictures/strut15.jpg'
import strut16 from '../pictures/strut16.jpg'
import strut17 from '../pictures/strut17.jpg'
import strut18 from '../pictures/strut18.jpg'
import strut19 from '../pictures/strut19.jpg'
import KP from '../pictures/kp1.jpg'
import girlz from '../pictures/girlz3.jpg'



const images = [and1, strut12 , group6, joe1, ir1 , and4, strut7 , strut16, group1 , and3 , group4, joe2, ir2, strut15, girlz, and2, strut19 ,strut14, group5, KP , strut18, strut17, joe4, zr ];

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
  
};

 const Galleryy = () =>{

    return (
      <>
       <p style={{textAlign:'center', marginTop: '2%'}}><span style={{fontSize: '160px', fontFamily:'Raleway, sans-serif', fontWeight:'bold', color:'#f7f7f7', textAlign:'center'}}>GALLERY</span></p>
          <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {images.map((image, index) => (
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <img src={image} key={index} alt={`Image ${index + 1}`} style={{
          maxWidth: '100%', height: 'auto'
        }} />
      ))}
    </Masonry>
      </>
    )
 }

 export default Galleryy;