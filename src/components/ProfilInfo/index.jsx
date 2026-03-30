import styles from "./profilInfo.module.css";
import Image from "next/image";
import Link from "next/link";

export default function ProfilInfo({
  imgUrl,
  name,
  country,
  city,
  tagline,
  price,
  id,
}) {
  return (
    <div className={styles.container}>
      <Link key={id} href={`/photographer/${id}`}>
        <Image
          className={styles.img}
          src={imgUrl}
          height={200}
          width={200}
          alt={name}
        />
        <h2 className={styles.h2}>{name}</h2>
      </Link>
      <p className={styles.town}>{`${country}, ${city}`}</p>
      <p className={styles.tagline}>{tagline}</p>
      <p className={styles.price}>
        {price
          ? `
                    ${price}€/jour`
          : "prix non renseigner"}
      </p>
    </div>
  );
}
