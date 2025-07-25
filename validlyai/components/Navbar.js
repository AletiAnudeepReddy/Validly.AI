"use client";
import { Bot } from "lucide-react";
import { useState } from "react";
import AuthModal from "@/components/AuthModal";
import Link from "next/link";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      <nav className="flex sticky z-10 top-0 justify-between items-center h-16 px-6 bg-[#10151D]/99  text-white shadow-xl">
        {/* Left: Logo + Brand Name */}
        <Link href={"/"}>
        <div className="flex items-center gap-2">
          <span data-aos="fade-left" data-aos-delay="100" className="text-2xl">
            <Bot className="w-7 h-7 text-[#12EAB5]" />
          </span>
          <span data-aos="fade-left" data-aos-delay="200" className="font-bold text-xl tracking-wide">
            Validly.AI
          </span>
        </div>
        </Link>

        {/* Right: Links */}
        <div className="flex items-center gap-6">
          {!isLoggedIn ? (
            <>
            <Link href={"/about"}>
              <button data-aos="fade-right" data-aos-delay="300" className="hover:text-[#12EAB5] hover:scale-105 transition">About</button>
              </Link>
              <button
                data-aos="fade-right"
                data-aos-delay="200"
                onClick={() => setShowLogin(true)}
                className="hover:text-[#12EAB5] hover:scale-105 transition"
              >
                Login
              </button>
              <button
                data-aos="fade-right"
                data-aos-delay="100"
                onClick={() => setShowSignup(true)}
                className="bg-[#12EAB5] hover:scale-105 text-black px-4 py-1 rounded hover:opacity-90 transition"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              <button className="hover:text-[#12EAB5] hover:scale-105 transition">Dashboard</button>
              <button className="hover:text-[#12EAB5] hover:scale-105 transition">Insights</button>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="text-red-400 hover:scale-105 hover:text-red-300 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>

      {/* Modals */}
      <AuthModal isOpen={showLogin} setIsOpen={setShowLogin} type="login" />
      <AuthModal isOpen={showSignup} setIsOpen={setShowSignup} type="signup" />
    </>
  );
}
