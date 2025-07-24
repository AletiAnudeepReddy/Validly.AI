"use client";
import { Bot } from "lucide-react";

import { useState } from "react";

export default function Navbar() {
  // Simulated login state (replace with real auth logic later)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="flex justify-between items-center h-16 px-6 bg-[#10151D] text-white shadow-md">
      {/* Left: Logo + Brand Name */}
      <div className="flex items-center gap-2">
        <span className="text-2xl"><Bot className="w-6 h-6 text-[#12EAB5]" /></span>
        <span className="font-bold text-lg tracking-wide">Validly.AI</span>
      </div>

      {/* Right: Links (change based on login state) */}
      <div className="flex items-center gap-6">
        {!isLoggedIn ? (
          <>
            <button className="hover:text-[#12EAB5] transition">About</button>
            <button className="hover:text-[#12EAB5] transition">Login</button>
            <button className="bg-[#12EAB5] text-black px-4 py-1 rounded hover:opacity-90 transition">
              Sign Up
            </button>
          </>
        ) : (
          <>
            <button className="hover:text-[#12EAB5] transition">Dashboard</button>
            <button className="hover:text-[#12EAB5] transition">Insights</button>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="text-red-400 hover:text-red-300 transition"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
