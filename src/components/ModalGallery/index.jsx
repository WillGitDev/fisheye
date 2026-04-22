"use client";
import styles from "./modal.module.css";
import Modal from "@components/Modal";
import Image from "next/image";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

export default function ModalGallery({
  isOpen,
  onClose,
  item,
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (item) {
      setIndex(item.currentIndex);
    }
  }, [item]);
  if (!item) return null;

  const currentMedia = item.items[index];

  const nextMedia = () => {
    setIndex((prevIndex) => {
      if (prevIndex === item.items.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  const prevMedia = () => {
    setIndex((prevIndex) => {
      if (prevIndex === 0) {
        return item.items.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.container}>
        <button
          className={styles.closeButton}
          type="button"
          title="Fermer"
          onClick={onClose}
          aria-label="Close Contact form"
          tabIndex={1}
        >
          <FontAwesomeIcon
            className={styles.icon}
            icon={faTimes}
          />
        </button>
        <button
          className={`${styles.chevronLeft} ${styles.chevron}`}
          type="button"
          title="Précédent"
          aria-label="Previous image"
          onClick={prevMedia}
        >
          <Image
            src="/navigation/chevron_left.png"
            height={50}
            width={30}
            alt="Previous image"
          />
        </button>
        <div className={styles.containerPhoto}>
          {currentMedia.image ? (
            <Image
              src={`/${currentMedia.image}`}
              width={1050}
              height={900}
              alt={currentMedia.title}
              className={styles.img}
              tabIndex={0}
            />
          ) : currentMedia.video ? (
            <video
              controls
              width={1050}
              height={900}
              className={styles.video}
            >
              <source
                src={`/${currentMedia.video}`}
                type="video/mp4"
              />
              Votre navigateur ne supporte pas la lecture de
              vidéos.
            </video>
          ) : null}
          <div>{item.title}</div>
        </div>
        <button
          className={`${styles.chevronRight} ${styles.chevron}`}
          type="button"
          title="Précédent"
          onClick={nextMedia}
          aria-label="Next image"
        >
          <Image
            src="/navigation/chevron_right.png"
            height={50}
            width={30}
            alt="Next image"
          />
        </button>
      </div>
    </Modal>
  );
}
