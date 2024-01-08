import pg from 'pg';
const client = new pg.Client({
  user: process.env.NUXT_PG_USER || 'reader',
  host: process.env.NUXT_PG_HOST || 'hh-pgsql-public.ebi.ac.uk',
  database: process.env.NUXT_PG_DB || 'pfmegrnargs',
  password: process.env.NUXT_PG_PASSWORD || 'NWDMCE5xdipIjRrp',
  port: 5432,
});
client
  .connect()
  .catch((reason) => {
    console.error(reason);
  })
  .then((value) => {
    console.log('connected', value);
  });

let connection;

export const withPG = async (event: any, func: (dbClient: pg.Client) => {}) => {
  return func.call(this, client);
};

export default defineNitroPlugin(async (nitro) => {
  // try {
  //   await client.connect(function (err) {
  //     if (err) {
  //       console.error('DB CONNECT ERR', err);
  //       throw err;
  //     }
  //     console.log('DB Connected!');
  //   });
  // } catch (err) {
  //   console.error(err);
  // }
  // nitro.hooks.hookOnce('close', async () => {
  //   await new Promise<void>((resolve) => client.end(() => resolve()));
  //   console.log('db connection closed');
  // });
});
