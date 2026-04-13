"use client";
import styles from "./listbox.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

export default function ListBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const options = ["Popularité", "Date", "Titre"];

  return (
    <div className={styles.container}>
      <p id="listbox-label" className={styles.label}>
        Trier par
      </p>
      <div
        className={`${styles.listButtonContainer} ${isOpen && styles.buttonOpen}`}
      >
        <button
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-labelledby="listbox-label"
          aria-activedescendant={`option-${selectedIndex}`}
          onClick={() => setIsOpen(!isOpen)}
          className={styles.listBoxButton}
        >
          {options[selectedIndex]}
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`${styles.chevron} ${isOpen && styles.chevronOpen}`}
          />
        </button>
        {isOpen && (
          <ul
            role="listbox"
            aria-labelledby="listbox-label"
            className={styles.list}
          >
            {options.map(
              (option, index) =>
                selectedIndex !== index && (
                  <li
                    className={styles.listItem}
                    key={option}
                    id={`option-${index}`}
                    role="option"
                    aria-selected={index === selectedIndex}
                    tabIndex="0"
                    onClick={() => {
                      setSelectedIndex(index);
                      setIsOpen(false);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        setSelectedIndex(index);
                        setIsOpen(false);
                      }
                    }}
                  >
                    {option}
                  </li>
                ),
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
