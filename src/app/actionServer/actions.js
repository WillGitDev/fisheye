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
