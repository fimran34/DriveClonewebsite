import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@test.com",
    },
  });


  await prisma.user.create({
    data: {
      name: "Bob",
      email: "bob@test.com",
    },
  });

}

main()
  .then(() => {
    console.log("Seed completed");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });