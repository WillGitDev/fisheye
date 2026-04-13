"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import "@/app/globals.css";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const value = {
    isOpen,
    setIsOpen,
  };
  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add("noScroll");
    } else {
      document.documentElement.classList.remove("noScroll");
    }
    return () =>
      document.documentElement.classList.remove("noScroll");
  }, [isOpen]);
  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error(
      "useModal doit être utilisé à l'intérieur d'un ModalProvider.",
    );
  }
  return context;
}
