require('dotenv').config();

module.exports = (()=>{
  const url = process.env.DATABASE_URL;

  if (!url) return 'unknown';

  if (url.startsWith('postgresql://')) return 'PostgreSQL';
  if (url.startsWith('mysql://')) return 'MySQL';
  if (url.startsWith('file:')) return 'SQLite';
  if (url.startsWith('mongodb://') || url.startsWith('mongodb+srv://')) return 'MongoDB';

  return 'unknown';
})