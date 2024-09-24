"use client";

import React, { useState } from "react";
import useSubmitOptometristData from "./hooks/optomhook";

const ChatPopup = () => {
  const [isVisible, setIsVisible] = useState(true);

  const { buttonClickCount } = useSubmitOptometristData();

  const handleSubmit = async (event) => {
        console.log("................... CLICKED");

    event.preventDefault();


    await buttonClickCount();
    
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-1000">
          {/* Close button */}
          <div className="flex justify-end mb-1">
            <button
              onClick={handleClose}
              className="
    text-gray-500 
    border border-gray-400 
    hover:border-gray-600 
    rounded-xl
    px-2
    text-sm
   
    shadow-md 
    transition-all 
    duration-300 
    ease-in-out 
    transform 
    hover:scale-110
  "
            >
              close
            </button>
          </div>

          {/* ChatPopup button */}
          <button
            className="
              flex items-center justify-between 
              w-full 
              bg-[#56AEFF] rounded-full shadow-md 
              px-2 sm:px-4 py-2 
              border-2
              hover:bg-[#4a99e6] 
              focus:outline-none 
              transition-all duration-300 ease-in-out transform hover:scale-105
            "
            style={{
              border: "0.2px solid #56AEFF",
              background: "#56AEFF",
            }}
            onClick={handleSubmit}
          >
            {/* Text Section */}
            <div>
              <h2 className="text-sm sm:text-lg md:text-xl lg:text-xl text-center font-black text-white">
                Quizzes & Eye Tests
              </h2>
              <p className="text-xs text-white text-center">
                Fun for individuals and families
              </p>
            </div>
          </button>
        </div>
      )}
    </>
  );
};

export default ChatPopup;
