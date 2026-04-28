import styles from "./contactFormModal.module.css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "@components/Modal";

export default function ContactFormModal({
  name,
  isOpen,
  onClose,
}) {
  const handlePrintInfo = (e) => {
    e.preventDefault();
    const form = e.currentTarget.closest("form");
    const data = new FormData(form);
    console.log(
      "Le nom de l'utilisateur : ",
      data.get("name"),
    );
    console.log(
      "Le prénom de l'utilisateur : ",
      data.get("surname"),
    );
    console.log(
      "L'adresse mail de l'utilisateur est : ",
      data.get("email"),
    );
    console.log(
      "Le message utilisateur : ",
      data.get("message"),
    );
    form.reset();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.containerForm}>
        <div className={styles.header}>
          <h1 className={styles.title} id="modalTitle">
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
            id="firstName"
          >
            Prénom
          </label>
          <input
            className={styles.input}
            type="text"
            id="surname"
            name="surname"
            aria-labelledby="firstName"
          />
          <label
            className={styles.label}
            htmlFor="name"
            id="lastName"
          >
            Nom
          </label>
          <input
            className={styles.input}
            type="text"
            id="name"
            name="name"
            aria-labelledby="lastName"
          />
          <label
            className={styles.label}
            htmlFor="email"
            id="emailLabel"
          >
            Email
          </label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            aria-labelledby="emailLabel"
          />
          <label
            className={styles.label}
            htmlFor="message"
            id="yourMessage"
          >
            Votre message
          </label>
          <textarea
            className={styles.textarea}
            id="message"
            name="message"
            aria-labelledby="yourMessage"
          ></textarea>

          <button
            className={styles.button}
            type="submit"
            aria-label="Send"
            onClick={handlePrintInfo}
          >
            Envoyer
          </button>
        </form>
      </div>
    </Modal>
  );
}
