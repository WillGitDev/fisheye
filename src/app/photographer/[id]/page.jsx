import styles from "./pageid.module.css";
import Header from "@components/Header";
import { prisma } from "@prismatool/prisma.js";
import BannerProfil from "@components/BannerProfil";
import Gallery from "@components/Gallery";
import ListBox from "@components/ListBox";
export default async function Page({ params }) {
  const { id } = await params;
  const photographer = await prisma.photographer.findUnique(
    {
      where: {
        id: parseInt(id),
      },
      //on inclut la relation
      include: {
        medias: true,
      },
    },
  );
  console.log(photographer);
  return (
    <div className={styles.container}>
      <Header />
      <BannerProfil
        imgUrl={photographer.portrait}
        name={photographer.name}
        tagline={photographer.tagline}
        country={photographer.country}
        city={photographer.city}
        id={photographer.id}
      />
      <ListBox />
      <Gallery />
    </div>
  );
}
