"use client";
import styles from "./page.module.css";
import Header from "@components/Header";
import ProfilInfo from "@components/ProfilInfo";
import { findAllPhotographers } from "@/app/actionServer/actions";
import { useEffect, useState } from "react";

export default function Page() {
  const [photographers, setPhotographers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await findAllPhotographers();
      setPhotographers(data);
    }
    fetchData();
  }, []);
  if (!photographers) {
    return <div>Chargement de la page ...</div>;
  }
  return (
    <div className={styles.container}>
      <Header title={true} />
      <div className={styles.containerProfil}>
        {photographers.map((photographer) => (
          <ProfilInfo
            key={photographer.id}
            imgUrl={`/${photographer.portrait}`}
            name={photographer.name}
            city={photographer.city}
            country={photographer.country}
            price={photographer.price}
            tagline={photographer.tagline}
            id={photographer.id}
          />
        ))}
      </div>
    </div>
  );
}
