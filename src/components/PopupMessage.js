import React from "react";
import { Image } from "lucide-react";

const PopupMessage = ({ message, isOpen, onClose }) => {
    console.log("............", isOpen);

    if (!isOpen) return null;
    

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 w-10/12 sm:w-96 lg:w-[28rem] animate-fade-in">
        <h2 className="text-2xl font-extrabold text-center text-gray-800 mb-2">
          {message}
        </h2>
        <p className="text-gray-600 text-center mb-4">
          Thanks for your interest! We`ll be in touch soon.
        </p>
        <button
          className="bg-[#C60D69] hover:bg-[#A00C58] text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 ease-in-out mx-auto block shadow-md hover:shadow-lg"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PopupMessage;
