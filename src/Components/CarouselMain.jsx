import React, { useState, useEffect } from "react";
import caro1 from "../assets/caro1.jpg";
import caro2 from "../assets/caro2.jpg";
import caro3 from "../assets/caro3.jpg";
import caro4 from "../assets/caro4.jpg";

const CarouselMain = () => {
  const images = [caro1, caro2, caro3, caro4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true); // Start transition
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        setIsTransitioning(false); // End transition
      }, 500); // Adjust timing to match CSS transition duration
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      style={{
        height: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt=""
          style={{
            maxWidth: "100%",
            maxHeight: "80%",
            objectFit: "cover",
            position: "absolute",
            opacity: index === currentIndex ? 1 : 0,
            transition: "opacity 0.9s ease-in-out", // CSS transition for opacity
            zIndex: index === currentIndex ? 1 : 0,
          }}
        />
      ))}
    </div>
  );
};

export default CarouselMain;
