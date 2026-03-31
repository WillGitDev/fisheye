import styles from "./bannerProfil.module.css";
import Image from "next/image";
export default function BannerProfil({
  imgUrl,
  name,
  tagline,
  country,
  city,
  id,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1 className={styles.h1}>{name}</h1>
        <p
          className={styles.town}
        >{`${city}, ${country}`}</p>
        <p className={styles.tagline}>{tagline}</p>
      </div>
      <button
        className={styles.buttonContact}
        aria-label="Contact me"
      >
        Contactez-moi
      </button>
      <Image
        className={styles.img}
        src={`/${imgUrl}`}
        alt={name}
        width={200}
        height={200}
      />
    </div>
  );
}
