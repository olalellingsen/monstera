"use client";

import { X } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function Dialog() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`absolute top-0 left-0 w-full h-screen bg-black/50 transition-opacity duration-500 ${
        isVisible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="mx-auto h-full flex justify-center items-center">
        <div className="border p-10 relative">
          <button
            onClick={() => setIsVisible(false)}
            className={`top-2 right-2 hover:cursor-pointer ${isVisible ? "absolute" : "hidden"}`}
          >
            <X />
          </button>
          <h3>monstera vol.2</h3>
          <h3>out november 7th</h3>
          <p></p>
        </div>
      </div>
    </div>
  );
}
