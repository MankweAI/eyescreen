"use client"

import React from "react";
import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import Image from "next/image";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./SliderStyles.css";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full lg:w-1/2 mx-auto relative">
      <Slider {...settings}>
        <div className="flex items-center justify-center">
          <Image
            src="/images/quiz-a.png"
            alt="Slide 1"
            width={500}
            height={500}
            className="w-auto h-[500px]"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/images/quiz-b.png"
            alt="Slide 1"
            width={500}
            height={500}
            className="w-auto h-[500px]"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/images/quiz-c.png"
            alt="Slide 1"
            width={500}
            height={500}
            className="w-auto h-[500px]"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/images/test-a.png"
            alt="Slide 1"
            width={500}
            height={500}
            className="w-auto h-[500px]"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/images/test-b.png"
            alt="Slide 1"
            width={500}
            height={500}
            className="w-auto h-[500px]"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/images/test-c.png"
            alt="Slide 1"
            width={500}
            height={500}
            className="w-auto h-[500px]"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/images/test-d.png"
            alt="Slide 1"
            width={500}
            height={500}
            className="w-auto h-[500px]"
          />
        </div>

        <div className="flex items-center justify-center">
          <Image
            src="/images/test-e.png"
            alt="Slide 1"
            width={500}
            height={500}
            className="w-auto h-[500px]"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
