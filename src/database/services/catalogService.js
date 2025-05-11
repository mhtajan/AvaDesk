const prisma = require('../prisma');

async function createCatalog(title, status = 'open') {
  try {
    const catalog = await prisma.catalog.create({
      data: {
        title,
        status,
      },
    });

    console.log('✅ Catalog created:', catalog);
    return catalog;
  } catch (error) {
    console.error('❌ Failed to create Catalog:', error);
    throw error;
  }
}

module.exports = {
  createCatalog,
};
