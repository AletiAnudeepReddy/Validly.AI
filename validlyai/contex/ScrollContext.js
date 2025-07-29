"use client";

import { createContext, useContext, useState } from "react";

const ScrollContext = createContext();

export const useScroll = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
  const [scrollTo, setScrollTo] = useState({
    swot: null,
    competitors: null,
    insights: null,
  });

  return (
    <ScrollContext.Provider value={{ scrollTo, setScrollTo }}>
      {children}
    </ScrollContext.Provider>
  );
};
