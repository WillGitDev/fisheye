import styles from "./card.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";

export default function CardImg({ srcImg, title, like }) {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={`/${srcImg}`}
          width={350}
          height={300}
          alt={title}
          className={styles.img}
        />
      </div>
      <div className={styles.content}>
        <p className={styles.contentInfo}>{title}</p>
        <div className={styles.containerLike}>
          <p className={styles.nbrLikes}>
            {like}
            <FontAwesomeIcon
              icon={faHeartSolid}
              className={styles.heart}
              aria-label="likes"
            />
          </p>
        </div>
      </div>
    </div>
  );
}
