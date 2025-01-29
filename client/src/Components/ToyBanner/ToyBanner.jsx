
import React, { useEffect, useRef, useState } from "react";
import '../ToyBanner/ToyBanner.css';
import toy_banner from "../images/toy banner.jpg";
import toy_collection_banner from "../images/toy collection.png";

const ToyBanner = () => {
  const bannerRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <>
      <div
        ref={bannerRef}
        className={`toy-banner-container ${hasAnimated ? "in-view" : ""}`}
      >
        <div className="toy-banner-wrapper">
          <img src={toy_banner} alt="Toy Banner" />
          <img src={toy_collection_banner} alt="Toy Collection" />
        </div>
      </div>
    </>
  );
};

export default ToyBanner;