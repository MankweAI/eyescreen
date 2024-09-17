// PrevArrow.js
import React from "react";
import { IoChevronBack } from "react-icons/io5";

const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={className} // React Slick's classes
    style={{ ...style }} // React Slick's styles
    onClick={onClick}
    role="button"
    aria-label="Previous Slide"
  >
    <div // Your custom styling starts here
      className="rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
      style={{ backgroundColor: "#C60D69" }}
    >
      {/* Chevron Left Icon */}
      <IoChevronBack className="text-white" size={24} />
    </div>
  </div>
);

export default PrevArrow;
