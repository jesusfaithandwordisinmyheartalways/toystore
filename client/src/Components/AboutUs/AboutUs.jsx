
import React, { useEffect, useRef, useState } from 'react';
import about_us from '../images/toyrusemployees.jpg';
import about_us_two from '../images/toyrusemployeesmen.jpg';
import '../AboutUs/AboutUs.css';



const AboutUs = () => {
  const containerRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasAnimated]);




  return (
    <>
      <div
        className={`about-us-container ${hasAnimated ? 'active' : ''}`}
        ref={containerRef}
      >


        <div className="about-us-wrapper">
          <div className={`wrap ${hasAnimated ? 'active' : ''}`}>
            <div className="box">
              <img src={about_us} alt="About Us" />
            </div>
          </div>
          <div className={`wrap ${hasAnimated ? 'active' : ''}`}>
            <div className="box">
              <img src={about_us_two} alt="About Us Two" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;