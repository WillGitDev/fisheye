"use client";
import { createContext, useContext, useState } from "react";
import "@/app/globals.css";

const TagContext = createContext();

export function TagProvider({ children }) {
  const [mediaTag, setMediaTag] = useState("Popularité");
  const value = {
    mediaTag,
    setMediaTag,
  };
  return (
    <TagContext.Provider value={value}>
      {children}
    </TagContext.Provider>
  );
}

export function useTag() {
  const context = useContext(TagContext);
  return context;
}
