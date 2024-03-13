import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined
};

//every time hot reload happens so it will create a new primsa client so we store client to global variabel so it not create new one 
export const db = globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV !== "production") globalThis.prisma = db