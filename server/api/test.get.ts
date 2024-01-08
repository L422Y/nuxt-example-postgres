import { withPG } from '../plugins/pg';

export default eventHandler(async (event) => {
  return await withPG(event, async (dbClient) => {
    const result = await dbClient.query('SELECT * FROM rnc_database');
    console.log(result);
  });
});
