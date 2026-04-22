"use client";
import styles from "./gallery.module.css";
import CardMedia from "@/components/CardMedia";
import { useModal } from "@/context/ModalContext";
import { useTag } from "@/context/TagContext";

import { useMemo } from "react";

export default function Gallery({ works }) {
  const {
    setIsOpenModalCarroussel,
    setSelectedCarrousselItem,
  } = useModal();
  const { mediaTag } = useTag();

  const sortedMedias = useMemo(() => {
    const result = [...works].sort((a, b) => {
      if (mediaTag === "Titre")
        return a.title.localeCompare(b.title);
      if (mediaTag === "Popularité")
        return b.likes - a.likes;
      if (mediaTag === "Date")
        return new Date(b.date) - new Date(a.date);
      return 0;
    });
    console.log(
      "Le fichier trié par ",
      mediaTag,
      ": ",
      result,
    );
    return result;
  }, [works, mediaTag]);

  return (
    <div className={styles.container}>
      {sortedMedias.map((media, index) => (
        <CardMedia
          key={media.id}
          srcMedia={media.image ? media.image : media.video}
          title={media.title}
          initialLike={media.likes}
          id={media.id}
          image={media.image}
          onClick={() => {
            setSelectedCarrousselItem({
              items: sortedMedias,
              currentIndex: index,
            });
            setIsOpenModalCarroussel(true);
          }}
        />
      ))}
    </div>
  );
}
