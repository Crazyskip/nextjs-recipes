const Airtable = require('airtable');

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID);

const table = base(process.env.AIRTABLE_TABLE_NAME);

export default async function getRecipes() {
  const records = await table.select({
    sort: [{field: 'name', direction: 'asc'}],
  }).all();

  const recipes = records.map(record => {
    return {
      id: record.id,
      name: record.fields.name,
      ingredients: record.fields.ingredients,
      method: record.fields.method,
    }
  })

  return recipes;
}