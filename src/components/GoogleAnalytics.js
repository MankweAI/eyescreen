// src/components/GoogleAnalytics.js
"use client"
import React, { useEffect } from "react";

const GoogleAnalytics = () => {
  useEffect(() => {
    // Initialize the dataLayer
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag; // Make gtag available globally

    // Create the script tag
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-ZP6RPEPHYL`;
    document.head.appendChild(script);

    // Initialize gtag
    gtag("js", new Date());
    gtag("config", "G-ZP6RPEPHYL");

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.head.removeChild(script);
      window.gtag = undefined;
    };
  }, []);

  return null; // This component does not render anything
};

export default GoogleAnalytics;
