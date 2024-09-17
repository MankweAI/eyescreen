// NextArrow.js
import React from "react";
import { IoChevronForward } from "react-icons/io5";

const NextArrow = ({ className, style, onClick }) => (
  <div
    className={className} // React Slick's classes
    style={{ ...style }} // React Slick's styles
    onClick={onClick}
    role="button"
    aria-label="Next Slide"
  >
    <div // Your custom styling starts here
      className="rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
      style={{ backgroundColor: "#C60D69" }}
    >
      {/* Chevron Right Icon */}
      <IoChevronForward className="text-white" size={24} />
    </div>
  </div>
);

export default NextArrow;
