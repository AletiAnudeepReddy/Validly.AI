"use client";
import React from "react";
import { Mail, Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#10151D]/99 text-gray-300 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        <div>
          <h3 data-aos="zoom-out"
          data-aos-delay="100" className="text-[#12EAB5] text-xl font-semibold mb-4">Validly.ai</h3>
          <p data-aos="zoom-in"
          data-aos-delay="100" className="text-sm leading-relaxed">
            Validate your startup idea with data-backed insights. All in one place, powered by AI.
          </p>
        </div>

        <div>
          <h4 data-aos="zoom-out"
          data-aos-delay="100" className="text-[#12EAB5] font-semibold text-lg mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li data-aos="fade-left"
          data-aos-delay="100"><a href="/h" className="hover:text-[#12EAB5 transition">Home</a></li>
            <li data-aos="fade-left"
          data-aos-delay="150"><a href="/about" className="hover:text-[#12EAB5] transition">About</a></li>
            <li data-aos="fade-left"
          data-aos-delay="200"><a href="/login" className="hover:text-[#12EAB5] transition">Login</a></li>
            <li data-aos="fade-left"
          data-aos-delay="250"><a href="/signup" className="hover:text-[#12EAB5] transition">Signup</a></li>
          </ul>
        </div>

        <div>
          <h4 data-aos="zoom-out"
          data-aos-delay="100" className="text-[#12EAB5] font-semibold text-lg mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li data-aos="fade-left"
          data-aos-delay="100"><a href="/contact" className="hover:text-[#12EAB5] transition">Contact Us</a></li>
            <li data-aos="fade-left"
          data-aos-delay="150"><a href="/faq" className="hover:text-[#12EAB5] transition">FAQ</a></li>
            <li data-aos="fade-left"
          data-aos-delay="200"><a href="/terms" className="hover:text-[#12EAB5] transition">Terms of Use</a></li>
            <li data-aos="fade-left"
          data-aos-delay="250"><a href="/privacy" className="hover:text-[#12EAB5] transition">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 data-aos="zoom-out"
          data-aos-delay="100" className="text-white font-semibold text-lg mb-3">Connect</h4>
          <div className="flex items-center text-[#12EAB5] space-x-4 mt-2">
            <a data-aos="fade-up"
          data-aos-delay="100" href="mailto:support@validly.ai" className="hover:text-white transition">
              <Mail className="w-5 h-5" />
            </a>
            <a data-aos="fade-up"
          data-aos-delay="200" href="https://github.com" className="hover:text-white transition">
              <Github className="w-5 h-5" />
            </a>
            <a data-aos="fade-up"
          data-aos-delay="300" href="https://twitter.com" className="hover:text-white transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a data-aos="fade-up"
          data-aos-delay="400" href="https://linkedin.com" className="hover:text-white transition">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          <p data-aos="zoom-in"
          data-aos-delay="400" className="mt-4 text-sm">Email: <span className="text-white">support@validly.ai</span></p>
        </div>
      </div>

      <div className="text-center flex justify-center items-center gap-5 text-sm mt-12 border-t border-gray-700 pt-6 text-gray-400">
      <div>
        &copy; {new Date().getFullYear()} <span className=" font-medium text-[#12EAB5]">Validly.ai</span> — All rights reserved. 
        </div>
        <div>
        <span className="inline-block">
          Crafted with <span className="text-red-500 py-1 text-xl">♥</span> by <span className="text-white font-medium">Anudeep</span>
        </span>
        </div>
      </div>
    </footer>
  );
}
