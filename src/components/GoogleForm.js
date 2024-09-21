"use client";

import React, { useState, useEffect } from "react";
import useSubmitOptometristData from "./hooks/optomhook";
import PopupMessage from "./PopupMessage";
import { v4 as uuidv4 } from "uuid";

export default function BasicForm() {
  const [optomId, setOptomId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsApp, setWhatsApp] = useState("");
  const [website, setWebsite] = useState("");
  const [amount, setAmount] = useState("");
  const [comment, setComment] = useState("");

  const { submitOptometristData, loading, error, optomTotal } =
    useSubmitOptometristData();

  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
    window.location.reload();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await submitOptometristData(
      optomId,
      name,
      whatsApp,
      email,
      website,
      comment
    );
    setIsOpen(true);
  };

  useEffect(() => {
    if (!optomId) {
      const uniqueId = uuidv4();
      setOptomId(uniqueId);
    }
  }, [optomId]);

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
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#C60D69]  focus:border-[#C60D69]  sm:text-sm"
          />
        </div>
        <div className="form-control">
          <label className="block text-sm font-medium text-gray-700">
            WhatsApp Number
          </label>
          <input
            type="text"
            name="WhatsApp"
            value={whatsApp}
            onChange={(e) => setWhatsApp(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#C60D69] focus:border-[#C60D69] sm:text-sm"
          />
        </div>
        <div className="form-control">
          <div className="form-control mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Share your thoughts
            </label>
            <textarea
              name="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
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
