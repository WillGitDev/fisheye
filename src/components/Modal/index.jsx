import styles from "./modal.module.css";
import { useRef, useEffect } from "react";

export default function Modal({
  isOpen,
  onClose,
  children,
}) {
  const modalRef = useRef(null);
  const lastActiveElement = useRef(null);

  useEffect(() => {
    if (isOpen) {
      lastActiveElement.current = document.activeElement;
      const focusableSelectors = [
        "button",
        "input",
        "textarea",
      ];
      const focusableElements = modalRef.current
        ? modalRef.current.querySelectorAll(
            focusableSelectors.join(","),
          )
        : [];
      let firstElement = focusableElements[0];
      const closeButton = modalRef.current?.querySelector(
        `.${styles.closeButton}`,
      );
      if (closeButton) {
        firstElement = closeButton;
      }
      const lastElement =
        focusableElements[focusableElements.length - 1];
      firstElement && firstElement.focus();

      function handleTab(event) {
        if (event.key === "Escape" && isOpen) {
          event.preventDefault();
          onClose();
          return;
        }

        if (event.key !== "Tab") return;

        if (focusableElements.length === 0) return;

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
      document.addEventListener("keydown", handleTab);
      console.log(focusableElements);
    } else {
      if (lastActiveElement.current) {
        lastActiveElement.current.focus();
      }
    }
  }, [isOpen]);
  return (
    <div
      ref={modalRef}
      className={`${styles.container} ${isOpen ? styles.openModal : styles.closeModal}`}
      aria-hidden={!isOpen}
      role="dialog"
      aria-describedby="modalContact"
      aria-labelledby="modal title"
    >
      {children}
    </div>
  );
}
