import React from 'react'
import Masonry from 'react-masonry-css';
import and1 from '../pictures/andrew1.jpeg'
import and2 from '../pictures/andrew2.jpeg'
import and3 from '../pictures/andrew3.jpeg'
import and4 from '../pictures/andrew4.jpeg'
import joe1 from '../pictures/joe1.jpeg'
import joe2 from '../pictures/joe2.jpeg'
import joe3 from '../pictures/joe3.jpeg'
import joe4 from '../pictures/joe4.jpeg'
import group1 from '../pictures/Group1.jpg'
import group6 from '../pictures/Group6.jpg'
import group4 from '../pictures/Group4.jpg'
import group5 from '../pictures/Group5.jpg'
import ir1 from '../pictures/IR1.jpg'
import ir2 from '../pictures/IR2.jpg'
import zr from '../pictures/ZR1.jpg'
import strut4 from '../pictures/strut4.jpg'
import strut7 from '../pictures/Strut7.jpg'
import strut11 from '../pictures/strut11.jpg'
import strut12 from '../pictures/strut12.jpg'
import strut14 from '../pictures/strut14.jpg'
import strut15 from '../pictures/strut15.jpg'


const images = [and1, and2, and3, and4, joe1, joe3, joe2, joe4, group1, group6, group4, group5, ir1, ir2, zr, strut4, strut7, strut11, strut12, strut14, strut15];

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
  
};

 const Galleryy = () =>{

    return (
      <>
          <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {images.map((image, index) => (
        <img src={image} key={index} alt={`Image ${index + 1}`} style={{
          maxWidth: '100%', height: 'auto'
        }} />
      ))}
    </Masonry>
      </>
    )
 }

 export default Galleryy;