import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  const hashedPassword = await bcrypt.hash("asddsa", 10);

  const testUsers = [
    { name: "manager", email: "manager@test.com" },
    { name: "user", email: "user@test.com" },
  ];

  const testUser = await prisma.$transaction(
    testUsers.map((user) =>
      prisma.user.create({
        data: {
          name: user.name,
          email: user.email,
          emailVerified: new Date("2023-09-07"),
          Accounts: {
            create: {
              password: hashedPassword,
              provider: "credentials",
              type: "credentials",
            },
          },
        },
      }),
    ),
  );

  console.log(">>>> seed Users");
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
