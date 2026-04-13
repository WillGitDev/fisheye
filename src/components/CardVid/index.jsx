import styles from "./card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";

export default function CardVid({ srcVid, title, like }) {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <video className={styles.video} src={`/${srcVid}`}>
          Le navigateur ne peut pas afficher de vidéo.
        </video>
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
