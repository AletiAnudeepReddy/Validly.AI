"use client";
import { Bot } from "lucide-react";
import { useEffect, useState } from "react";
import AuthModal from "@/components/AuthModal";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useScroll } from "@/contex/ScrollContext";

export default function Navbar() {
  const pathname = usePathname();
  const { scrollTo } = useScroll();

  const handleClick = (target) => {
    if (pathname === "/validate" && scrollTo[target]) {
      scrollTo[target](); // Trigger the scroll
    } else {
      // Optional: redirect or do nothing
    }
  };
  const router = useRouter();
  const { data: session } = useSession();
  const isLoggedIn = !!session;

  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Optional: delay to show loader for at least 500ms
  const showLoader = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <>
      {/* Loader */}
      {isLoading && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-20 w-20"></div>
        </div>
      )}

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
              <button onClick={() => handleClick("swot")} data-aos="fade-right" data-aos-delay="300" className="hover:text-[#12EAB5] hover:scale-105 transition">SWOT</button>
              <button onClick={() => handleClick("competitors")} data-aos="fade-right" data-aos-delay="250" className="hover:text-[#12EAB5] hover:scale-105 transition">Competitors</button>
              <button onClick={() => handleClick("insights")} data-aos="fade-right" data-aos-delay="200" className="hover:text-[#12EAB5] hover:scale-105 transition">Insights</button>
              <button data-aos="fade-right" data-aos-delay="150" className="hover:text-[#12EAB5] hover:scale-105 transition">Dashboard</button>
              <button
                data-aos="fade-right"
                data-aos-delay="100"
                onClick={async () => {
                  showLoader();
                  await signOut({ redirect: false });
                  router.push("/");
                }}
                className="bg-red-400 hover:scale-105 text-black px-4 py-1 rounded hover:opacity-90 transition"
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
