import { NextResponse } from "next/server";
import { database } from "../../../lib/firebaseconfig";
import { ref, push, update, get, runTransaction, set } from "firebase/database";


export async function POST() {
    const clickCountRef = ref(database, "clickCount");
    

  await runTransaction(clickCountRef, (currentValue) => {
    return (currentValue || 0) + 1;
  });

  return NextResponse.json(
    { message: "Click count incremented" },
    { status: 200 }
  );
}
