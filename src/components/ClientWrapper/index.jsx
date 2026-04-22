"use client";
import { useState } from "react";
import styles from "./clientwrapper.module.css";
import ContactFormModal from "@components/ContactFormModal";
import { useModal } from "@/context/ModalContext";
import ModalGallery from "@components/ModalGallery";

export default function ClientWrapper({
  photographer,
  children,
}) {
  const name = photographer.name;

  const {
    isOpenModalForm,
    setIsOpenModalForm,
    isOpenModalCarroussel,
    setIsOpenModalCarroussel,
    selectedCarrousselItem,
    setSelectedCarrousselItem,
  } = useModal();

  return (
    <div className={styles.container}>
      <ContactFormModal
        isOpen={isOpenModalForm}
        onClose={() => setIsOpenModalForm(false)}
        name={name}
      />
      <ModalGallery
        isOpen={isOpenModalCarroussel}
        onClose={() => {
          setIsOpenModalCarroussel(false);
          setSelectedCarrousselItem(null);
        }}
        item={selectedCarrousselItem}
      />
      <div aria-hidden={isOpenModalForm}>{children}</div>
    </div>
  );
}
