'use client';
import React from 'react';
 // Optional: if you use className merging helper

export const Button = ({ children, onClick, type = "button", className = "", disabled = false }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex items-center justify-center px-5 py-2.5 rounded-xl 
            bg-blue-600 hover:bg-blue-700 text-white font-semibold 
            transition duration-200 ease-in-out focus:outline-none focus:ring-2 
            focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed 
            ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
