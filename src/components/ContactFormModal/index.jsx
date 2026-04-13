import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./contactFormModal.module.css";
import { useRef, useEffect } from "react";
export default function ContactFormModal({
  name,
  isOpen,
  onClose,
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
      <div className={styles.containerForm}>
        <div className={styles.header}>
          <h1 className={styles.title} id="modal title">
            Contactez-moi {name}
          </h1>
          <button
            className={styles.closeButton}
            type="button"
            title="Fermer"
            onClick={onClose}
            aria-label="Close Contact form"
          >
            <FontAwesomeIcon
              className={styles.icon}
              icon={faTimes}
            />
          </button>
        </div>
        <form className={styles.form}>
          <label
            className={styles.label}
            htmlFor="surname"
            id="Firts name"
          >
            Prénom
          </label>
          <input
            className={styles.input}
            type="text"
            id="surname"
            name="surname"
            aria-labelledby="First name"
          />
          <label
            className={styles.label}
            htmlFor="name"
            id="Last name"
          >
            Nom
          </label>
          <input
            className={styles.input}
            type="text"
            id="name"
            name="name"
            aria-labelledby="Last name"
          />
          <label
            className={styles.label}
            htmlFor="email"
            id="Email"
          >
            Email
          </label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            aria-labelledby="Email"
          />
          <label
            className={styles.label}
            htmlFor="message"
            id="Your message"
          >
            Votre message
          </label>
          <textarea
            className={styles.textarea}
            id="message"
            name="message"
            aria-labelledby="Your message"
          ></textarea>

          <button
            className={styles.button}
            type="submit"
            aria-label="Send"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}
