import styles from "./page.module.css";
import Header from "@components/Header";
import ProfilInfo from "@components/ProfilInfo";
import { prisma } from "../../lib/prisma";

export default async function Page() {
  const photographers =
    await prisma.photographer.findMany();
  console.log(photographers);

  return (
    <div className={styles.container}>
      <Header title={true} />
      <div className={styles.containerProfil}>
        {photographers.map((photographer) => (
          <ProfilInfo
            key={photographer.id}
            imgUrl={`/${photographer.portrait}`}
            name={photographer.name}
            city={photographer.city}
            country={photographer.country}
            price={photographer.price}
            tagline={photographer.tagline}
            id={photographer.id}
          />
        ))}
      </div>
    </div>
  );
}
