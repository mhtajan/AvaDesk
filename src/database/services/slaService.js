const prisma = require('../database/prisma');

async function createSLA(title, status = 'open') {
  try {
    const sla = await prisma.sla.create({
      data: {
        title,
        status,
      },
    });

    console.log('✅ SLA created:', sla);
    return sla;
  } catch (error) {
    console.error('❌ Failed to create SLA:', error);
    throw error;
  }
}

module.exports = {
  createSLA,
};
