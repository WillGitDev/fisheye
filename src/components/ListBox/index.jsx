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

  const handleOptionClick = (option) => {
    setMediaTag(option);
    setIsOpenModalForm(false);
  };

  useEffect(() => {
    console.log("Valeur de mediaTag : ", mediaTag);
  }, [selectedIndex, setMediaTag]);
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
                    tabIndex="0"
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
