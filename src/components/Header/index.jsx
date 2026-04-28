import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Header({ title = false }) {
  return (
    <header className={styles.container}>
      <Link href="/">
        <Image
          src="/logo/logo.png"
          alt="Fisheye Home page"
          width={200}
          height={50}
        />
      </Link>
      {title && (
        <h1 className={styles.title}>Nos photographes</h1>
      )}
    </header>
  );
}
