import { PrismaClient } from "@prisma/client";
import sampleData from "./sampleData";

const main = async function () {
  const prisma = new PrismaClient();
  await prisma.products.deleteMany();
  await prisma.user.deleteMany();
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verificationToken.deleteMany();
  await prisma.products.createMany({ data: sampleData.products });
  await prisma.user.createMany({ data: sampleData.users });
  console.log("server run sucssesfully");
};
main();
