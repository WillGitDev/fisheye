"use client";
import { useState } from "react";
import styles from "./clientwrapper.module.css";
import ContactFormModal from "@components/ContactFormModal";
import { useModal } from "@/context/ModalContext";

export default function ClientWrapper({
  photographer, //À voir si on a besoin de récupérer cette objet.
  children,
}) {
  const { isOpen, setIsOpen } = useModal();

  return (
    <div className={styles.container}>
      <ContactFormModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <div aria-hidden={isOpen}>{children}</div>
    </div>
  );
}
