import styles from "./cardMedia.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { incrementLikeAction } from "@/app/actionServer/actions";

export default function CardMedia({
  srcMedia,
  title,
  initialLike,
  onClick,
  id,
  image, // booléen pour savoir si on affiche une image ou une vidéo.
}) {
  const [isLiked, setIsLiked] = useState(false);
  const [like, setLike] = useState(initialLike);

  const handleAddLike = async (e) => {
    e.stopPropagation();
    if (isLiked) return;

    setIsLiked(true);
    setLike((prev) => prev + 1);

    try {
      await incrementLikeAction(id);
    } catch (error) {
      console.error("Erreur lors de l'update : ", error);
      setLike((prev) => prev - 1);
      setIsLiked(false);
    }
  };

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.imgContainer}
        onClick={onClick}
        aria-label={title}
      >
        {image ? (
          <Image
            src={`/${srcMedia}`}
            width={350}
            height={300}
            alt={title}
            className={styles.img}
          />
        ) : (
          <video
            className={styles.video}
            src={`/${srcMedia}`}
          >
            Le navigateur ne peut pas afficher de vidéo.
          </video>
        )}
      </button>
      <div className={styles.content}>
        <p className={styles.contentInfo}>{title}</p>
        <div className={styles.containerLike}>
          <p
            className={styles.nbrLikes}
            onClick={handleAddLike}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAddLike(e);
              }
            }}
          >
            {like}
            <FontAwesomeIcon
              icon={faHeartSolid}
              className={styles.heart}
              aria-label="likes"
              tabIndex={0}
            />
          </p>
        </div>
      </div>
    </div>
  );
}
