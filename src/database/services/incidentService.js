const prisma = require('../prisma');

async function createIncident(title, status = 'open') {
  try {
    const incident = await prisma.incident.create({
      data: {
        title,
        status,
      },
    });

    console.log('✅ Incident created:', incident);
    return incident;
  } catch (error) {
    console.error('❌ Failed to create incident:', error);
    throw error;
  }
}

module.exports = {
  createIncident,
};
