"use server";
import { prisma } from "@prismatool/prisma.js";
import { revalidatePath } from "next/cache";

export async function incrementLikeAction(id) {
  await prisma.media.update({
    where: { id: id },
    data: {
      likes: { increment: 1 },
    },
  });
  revalidatePath("/photographer/[id]", "page");
}

export async function findAllPhotographers() {
  const photographers =
    await prisma.photographer.findMany();
  return photographers;
}

export async function findPhotographer(id) {
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
  return photographer;
}
