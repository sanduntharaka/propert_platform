import { PrismaClient } from "@/generated/prisma";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const email = "admin@example.com";
  const plain = "Passw0rd!";
  const passwordHash = await bcrypt.hash(plain, 10);

  await prisma.user.upsert({
    where: { email },
    update: { passwordHash },
    create: { email, name: "Admin", passwordHash },
  });

  console.log("Seeded:", email, "password:", plain);
}
main().finally(() => prisma.$disconnect());
