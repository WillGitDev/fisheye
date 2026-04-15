import styles from "./contactFormModal.module.css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "@components/Modal";

export default function ContactFormModal({
  name,
  isOpen,
  onClose,
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
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
    </Modal>
  );
}
