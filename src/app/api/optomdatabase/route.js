// src/app/api/optomdatabase/route.js

import { NextResponse } from "next/server";
import { database } from "../../../lib/firebaseconfig";
import { ref, push, update, get, runTransaction, set } from "firebase/database";

export async function POST(request) {
  console.log("API route called!");

  const body = await request.json();

  const { optomId, name, whatsApp, email, amount, comment } = body;

  const optomRef = ref(database, `optometrists/${optomId}`);
  const optomCountRef = ref(database, `optomTotal/`);

  try {
    // Check if the optometrist already exists
    const snapshot = await get(optomRef);

    if (snapshot.exists()) {
      // Update existing optometrist data
      await update(optomRef, { name, whatsApp, email, amount, comment });
    } else {
      // Create new optometrist entry
      await set(optomRef, { name, whatsApp, email, amount, comment });

      // Increment the optometrist count
      await runTransaction(optomCountRef, (currentCount) => {
        return (currentCount || 0) + 1;
      });
    }

    // Retrieve the new optometrist count
    const countSnapshot = await get(optomCountRef);
    const optomTotal = countSnapshot.val();

    return NextResponse.json({ optomTotal }, { status: 200 });
  } catch (error) {
    console.error("Error updating optometrist data:", error);
    return NextResponse.json(
      { message: "Failed to update optometrist data" },
      { status: 500 }
    );
  }
}
