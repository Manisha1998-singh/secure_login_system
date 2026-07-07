"use client";
import { useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";
export default function Counter() {
  const [count, setCount] = useState(0);

  const { isLoaded: authLoaded, userId, sessionId, getToken } = useAuth();
  const { isLoaded: userLoaded, isSignedIn, user } = useUser();
  if (!authLoaded || !userLoaded || !isSignedIn) {
    return null;
  }
  return (
    <>
      <div>
        <div>count: {count}</div>
        <button
          type="button"
          className="bg-blue-700 text-white rounded-4 border-round-5 p-4 border-r-8"
          onClick={() => setCount(count + 1)}>
          Click Me
        </button>
      </div>
    </>
  );
}
