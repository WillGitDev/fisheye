"use client";
import styles from "./contactButton.module.css";
import { useModal } from "@/context/ModalContext";

export default function ContactButton() {
  const { setIsOpenModalForm } = useModal();
  return (
    <>
      <button
        className={styles.buttonContact}
        type="button"
        aria-label="Contact me"
        onClick={() => setIsOpenModalForm(true)}
      >
        Contactez-moi
      </button>
    </>
  );
}
