



import React, { useState, useEffect } from "react";import '../HeroImage/HeroImage.css'
import toyHero from "../images/toyhero.png";
import toysImage from "../images/toys.png";
import toysImageTwo from "../images/Luigi.png";
import toysImageThree from "../images/spiderman.png";




const HeroImage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        { src: toyHero, caption: "Family Toys" },
        { src: toysImage, caption: "Kid Toy" },
        { src: toysImageTwo, caption: "Lugi" },
        { src: toysImageThree, caption: "Spiderman Toy" },
      ];



      useEffect(() => {
        const timer = setInterval(() => {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
      }, [images.length]);
    
      const handleDotClick = (index) => {
        setCurrentSlide(index);
      };
    


  return (
   <>

<div className="slideshow">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
        >
          <img src={image.src} alt={image.caption} />
          <div className="caption">{image.caption}</div>
        </div>
      ))}

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>




   </>
  )
}

export default HeroImage
