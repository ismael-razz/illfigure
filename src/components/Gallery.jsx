import React from 'react';
import { useState } from 'react';
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




const GalleryItem = ({ image, onClick }) => {
    return (
      <div className="gallery-item" onClick={onClick}>
        <img src={image} alt="" className="gallery-image" />
        <div className="gallery-image-overlay"></div>
      </div>
    );
  };
  
  const Gallery = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);
  
    const images = [
      and1,
      and2,
      and3,
      and4,
      joe1,
      joe2,
      joe3,
      joe4,
      group1,
      group4,
      group5,
      group6,
      ir1,
      ir2,
      zr,
      strut4,
      strut7,
      strut11,
      strut12,
      strut14,
    ];
  
    const handleImageClick = (index) => {
      setSelectedIndex(index);
    };
  
    const handlePopupClose = () => {
      setSelectedIndex(null);
    };
  
    return (
      <div className="gallery">
        {images.map((image, index) => (
          <GalleryItem
            key={index}
            image={image}
            onClick={() => handleImageClick(index)}
          />
        ))}
        {selectedIndex !== null && (
          <div className="gallery-popup" onClick={handlePopupClose}>
            <img
              src={images[selectedIndex]}
              alt=""
              className="popup-image"
            />
          </div>
        )}
      </div>
    );
  };
  
  export default Gallery;
  
  
  
  
  
  