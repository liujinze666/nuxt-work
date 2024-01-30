import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient({
  include: {
    posts: true,
  },
});

async function main() {
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
}

main().then(async () => {
  await prisma.$disconnect();
}).catch(async (e) => {
  console.log(e);
  prisma.$disconnect();
  process.exit(1);
}