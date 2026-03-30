import styles from "./pageid.module.css";
import Header from "@components/Header";

export default async function Page({ params }) {
  const { id } = await params;
  return (
    <div className={styles.container}>
      <Header />
      <p>Salut l'id est : {id}</p>
    </div>
  );
}
