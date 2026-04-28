"use client";
import styles from "./pageid.module.css";
import Header from "@components/Header";
import BannerProfil from "@components/BannerProfil";
import Gallery from "@components/Gallery";
import ListBox from "@components/ListBox";
import ClientWrapper from "@components/ClientWrapper";
import SumLikes from "@components/SumLikes";
import { findPhotographer } from "@/app/actionServer/actions";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  const [photographer, setPhotographer] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const { id } = await params;
      const data = await findPhotographer(id);
      setPhotographer(data);
    }
    fetchData();
  }, [params]);
  if (!photographer) {
    return <div>Chargement du profil...</div>;
  }

  let sumLike = 0;
  const priceHour = photographer.price;
  if (Array.isArray(photographer?.medias)) {
    photographer.medias.forEach((element) => {
      sumLike += element.likes;
    });
  }

  return (
    <ClientWrapper photographer={photographer}>
      <div className={styles.container}>
        <Header />
        <BannerProfil
          imgUrl={photographer?.portrait}
          name={
            photographer.name
              ? photographer.name
              : "non renseigné"
          }
          tagline={photographer.tagline}
          country={photographer.country}
          city={photographer.city}
          id={photographer.id}
        />
        <ListBox />
        <Gallery
          works={
            photographer.medias ? photographer.medias : []
          }
        />
        <div className={styles.containerSumLike}>
          <SumLikes
            sumLike={sumLike}
            priceHour={priceHour}
          />
        </div>
      </div>
    </ClientWrapper>
  );
}
