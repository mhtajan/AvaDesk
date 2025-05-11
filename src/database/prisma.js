const { PrismaClient } = require('@prisma/client');

module.exports = (()=>{
    const prisma = new PrismaClient();
    return prisma;
})