"use client";
import styles from "./listbox.module.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { useTag } from "@/context/TagContext";

export default function ListBox() {
  const [isOpenModalForm, setIsOpenModalForm] =
    useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const options = ["Popularité", "Date", "Titre"];
  const { mediaTag, setMediaTag } = useTag();

  const handleKeyDown = (e) => {
    if (!isOpenModalForm) {
      if (e.key === "ArrowDown" || e.key === "Enter") {
        e.preventDefault();
        setIsOpenModalForm(true);
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        setSelectedIndex((prev) =>
          prev < options.length - 1 ? prev + 1 : 0,
        );
        break;
      case "ArrowUp":
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : options.length - 1,
        );
        break;
      case "Enter":
        e.preventDefault();
        handleOptionClick(options[selectedIndex]);
        setIsOpenModalForm(false);
        break;
      case "Escape":
        setIsOpenModalForm(false);
        break;
    }
  };
  ///////////////////////////
  const handleOptionClick = (option) => {
    setMediaTag(option);
    setIsOpenModalForm(false);
  };

  useEffect(() => {}, [selectedIndex, setMediaTag]);
  return (
    <div className={styles.container}>
      <p id="listbox-label" className={styles.label}>
        Trier par
      </p>
      <div
        className={`${styles.listButtonContainer} ${isOpenModalForm && styles.buttonOpen}`}
      >
        <button
          aria-haspopup="listbox"
          aria-expanded={isOpenModalForm}
          aria-labelledby="listbox-label"
          aria-activedescendant={`option-${selectedIndex}`}
          onKeyDown={handleKeyDown}
          onClick={() =>
            setIsOpenModalForm(!isOpenModalForm)
          }
          className={styles.listBoxButton}
        >
          {options[selectedIndex]}
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`${styles.chevron} ${isOpenModalForm && styles.chevronOpen}`}
          />
        </button>
        {isOpenModalForm && (
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
                    onClick={() => {
                      handleOptionClick(option);
                      setSelectedIndex(index);
                      // setIsOpenModalForm(false);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleOptionClick(option);
                        setSelectedIndex(index);
                        setIsOpenModalForm(false);
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
