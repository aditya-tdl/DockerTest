const { PrismaClient } = require("@prisma/client");

// Create a new instance of PrismaClient
const prisma = new PrismaClient();
// const prisma = new PrismaClient({
//   log: ["query", "info", "warn", "error"], // Log queries and other information to the console
// });

// Function to handle graceful shutdown of the Prisma Client
const handleShutdown = async () => {
  console.log("Shutting down Prisma Client...");
  await prisma.$disconnect();
  console.log("Prisma Client disconnected.");
};

// Capture termination signals for graceful shutdown
process.on("SIGINT", handleShutdown);
process.on("SIGTERM", handleShutdown);

// Export the Prisma Client instance
module.exports = prisma;
