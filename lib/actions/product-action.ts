"use server";
import { prisma } from "@/db/prisma";
import { APP_LATEST_PRODUCTS_LIMIT } from "../constans";
import { convertData } from "../utils";

{
  /* get latest products */
}
export async function getLatesetProducts() {
  const data = await prisma.products.findMany({
    take: APP_LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },
  });

  return convertData(data);
}
//  get single prodcut by slug

export async function getSingleProduct(slug: string) {
  return await prisma.products.findFirst({
    where: { slug: slug },
  });
}
