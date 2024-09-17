import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

declare global {
  var cachedPrisma: PrismaClient
}

let prisma: PrismaClient
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient()
  }

  prisma = global.cachedPrisma
}

export const db = prisma
