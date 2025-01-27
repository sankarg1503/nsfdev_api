const Strapi = require('@strapi/strapi');
const migration = require('../src/migrations/field-rename');

async function runMigration() {
  try {
    const strapi = await Strapi().load();
    await strapi.start();

    console.log('Running field rename migration...');
    await migration.up(strapi);
    console.log('Migration completed successfully!');

    await strapi.destroy();
    process.exit(0);
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}
