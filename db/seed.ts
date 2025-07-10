import { PrismaClient } from "@prisma/client";
import sampleData from "./sampleData";

const main = async function () {
  const prisma = new PrismaClient();
  await prisma.products.deleteMany();
  await prisma.products.createMany({ data: sampleData.products });
  console.log("server run sucssesfully");
};
main();
