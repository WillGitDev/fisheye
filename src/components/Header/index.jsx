import styles from "./header.module.css";
import Image from "next/image";

export default function Header({ title = false }) {
  return (
    <div className={styles.container}>
      <Image
        src="/logo/logo.png"
        alt="Fisheye Home page"
        width={200}
        height={50}
      />
      {title && (
        <h1 className={styles.title}>Nos photographes</h1>
      )}
    </div>
  );
}
