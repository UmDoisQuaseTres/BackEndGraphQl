import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const task = await prisma.task.create({
    data: {
      id: "112045",
      user: "alice@prisma.io",
      public: true,
      task: "ajjajajaja",
    },
  });
  console.log(task);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
