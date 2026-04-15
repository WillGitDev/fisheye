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
  const [isOpenModalForm, setIsOpenModalForm] =
    useState(false);
  const [isOpenModalCarroussel, setIsOpenModalCarroussel] =
    useState(false);
  const [
    selectedCarrousselItem,
    setSelectedCarrousselItem,
  ] = useState(null);
  const [mediaTag, setMediaTag] = useState(null);
  const value = {
    isOpenModalForm,
    setIsOpenModalForm,
    isOpenModalCarroussel,
    setIsOpenModalCarroussel,
    selectedCarrousselItem,
    setSelectedCarrousselItem,
    mediaTag,
    setMediaTag,
  };
  useEffect(() => {
    if (isOpenModalForm) {
      document.documentElement.classList.add("noScroll");
    } else {
      document.documentElement.classList.remove("noScroll");
    }
    return () =>
      document.documentElement.classList.remove("noScroll");
  }, [isOpenModalForm]);
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
