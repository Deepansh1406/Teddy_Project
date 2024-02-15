import React, { useState } from "react";
import './headfooter.css';

const HeadFooter = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleLeftArrowClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % 3); // 3 is the number of slides
  };

  const handleRightArrowClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 3); // 3 is the number of slides
  };

  return (
    <div className="HeadFooter">
      <div className="headfoot-content">
        <div className="up-content">
          <h1 className="headfoot-conth1">You Are The Center Of Our Universe</h1>
          <img src="/Images/Testimonials.png" alt="" />
        </div>
        <div className="down-content-slider">
          <div className="left-slidArrow" onClick={handleLeftArrowClick}>
            <img src="/Images/arrowSlidleft.png" alt="" />
          </div>
          <div className="slider-three">
            <div className="slider1-img" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              <img src="/Images/slider1.png" alt="" />
            </div>
            <div className="slider2-img" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              <img src="/Images/slider2.png" alt="" />
            </div>
            <div className="slider3-img" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              <img src="/Images/slider3.png" alt="" />
            </div>
          </div>
          <div className="right-slidArrow" onClick={handleRightArrowClick}>
            <img src="/Images/arrowSlideRight.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadFooter;
