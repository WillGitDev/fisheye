import styles from "./sumLikes.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";

export default function SumLikes({ sumLike, priceHour }) {
  return (
    <div className={styles.container}>
      <div className={styles.containerSum}>
        <p>{sumLike}</p>
        <FontAwesomeIcon
          icon={faHeartSolid}
          className={styles.heart}
          aria-label="likes"
        />
      </div>
      <div className={styles.containerPrice}>
        <p>{`${priceHour} €/jour`}</p>
      </div>
    </div>
  );
}
