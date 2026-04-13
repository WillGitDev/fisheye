"use client";
import styles from "./gallery.module.css";
import CardImg from "@/components/CardImg";
import CardVid from "@/components/CardVid";

export default function Gallery({ works }) {
  const pictures = works.filter(
    (work) => work.image !== null,
  );
  const videos = works.filter(
    (work) => work.video !== null,
  );
  console.log("L'objet works contient :", videos);
  return (
    <div className={styles.container}>
      {pictures.map((picture) => (
        <CardImg
          key={picture.id}
          srcImg={picture.image}
          title={picture.title}
          like={picture.likes}
        />
      ))}
      {videos.map((video) => (
        <CardVid
          key={video.id}
          srcVid={video.video}
          title={video.title}
          like={video.likes}
        />
      ))}
    </div>
  );
}
