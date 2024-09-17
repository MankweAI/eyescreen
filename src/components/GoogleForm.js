"use client";

import React, { useState, useEffect } from "react";
import PopupMessage from "./PopupMessage";

export default function BasicForm() {
  const [state, setState] = useState({
    name: "",
    email: "",
    website: "",
    amount: "",
    comment: "",
  });

  const [isOpen, setIsOpen] = useState(false);

   const onClose = () => {
     setIsOpen(false);
    window.location.reload();

   };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // console.log("...............", name, value);

    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    setIsOpen(true);
    
  };

  

  return (
    <div className="w-3/4 md:w-1/2 xl:w-1/4 p-4">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="form-control">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#C60D69]  focus:border-[#C60D69]  sm:text-sm"
          />
        </div>
        <div className="form-control">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#C60D69]  focus:border-[#C60D69]  sm:text-sm"
          />
        </div>
        <div className="form-control">
          <label className="block text-sm font-medium text-gray-700">
            website
          </label>
          <input
            type="text"
            name="website"
            value={state.website}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#C60D69] focus:border-[#C60D69] sm:text-sm"
          />
        </div>
        <div className="form-control">
          <label className="block text-sm font-medium text-gray-700">
            How much would you pay for the platform?
          </label>

          <div className="flex flex-col space-y-4 mt-4">
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                name="amount"
                value="R0.00"
                onChange={handleInputChange}
                className="form-radio h-4 w-4 accent-[#C60D69] transition duration-150 ease-in-out"
              />
              <label className="text-gray-700">R0.00 </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                name="amount"
                value="R300.00"
                onChange={handleInputChange}
                className="form-radio h-4 w-4 accent-[#C60D69] transition duration-150 ease-in-out"
              />
              <label className="text-gray-700">R300.00</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                name="amount"
                value="R600.00"
                onChange={handleInputChange}
                className="form-radio h-4 w-4 accent-[#C60D69] transition duration-150 ease-in-out"
              />
              <label className="text-gray-700">R600.00 </label>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="radio"
                name="amount"
                value="R600.00"
                onChange={handleInputChange}
                className="form-radio h-4 w-4 accent-[#C60D69] transition duration-150 ease-in-out"
              />
              <label className="text-gray-700">R900.00 </label>
            </div>
          </div>
          <div className="form-control mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Share your thoughts
            </label>
            <textarea
              name="comment"
              value={state.comment}
              onChange={handleInputChange}
              className="mt-1 block w-full h-[6rem] px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#C60D69] focus:border-[#C60D69] sm:text-sm"
            />
          </div>
        </div>
        <div className="form-control">
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white  bg-[#C60D69] hover:bg-[#C60D69] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C60D69]"
          >
            Submit
          </button>
        </div>
      </form>

      {isOpen && (
        <PopupMessage
          message="Registration Success"
          onClose={onClose}
          isOpen={isOpen}
        />
      )}
    </div>
  );
}
