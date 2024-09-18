import { useState } from "react";

function useSubmitOptometristData() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [optomTotal, setOptomTotal] = useState(null);

  const submitOptometristData = async (
    optomId,
    name,
    whatsApp,
    email,
    amount,
    comment
  ) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/optomdatabase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          optomId,
          name,
          whatsApp,
          email,
          amount,
          comment,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setOptomTotal(data.optomTotal);
        // Optionally handle success (e.g., display a success message)
      } else {
        setError(data.message || "An error occurred");
      }
    } catch (err) {
      setError("Failed to submit data. Please try again.");
      console.error("Error submitting data:", err);
    } finally {
      setLoading(false);
    }
  };

  return { submitOptometristData, loading, error, optomTotal };
}

export default useSubmitOptometristData;
