import pg from "pg"


// Defaults to RNA Central public database (https://rnacentral.org/help/public-database)
const pool = new pg.Pool({
    user: process.env.NUXT_PG_USER || "reader",
    host: process.env.NUXT_PG_HOST || "hh-pgsql-public.ebi.ac.uk",
    database: process.env.NUXT_PG_DB || "pfmegrnargs",
    password: process.env.NUXT_PG_PASSWORD || "NWDMCE5xdipIjRrp",
    port: 5432,
    max: 5,
})

export const withPG = async (event: any, func: (dbClient: pg.PoolClient) => {}) => {
    const client = await pool.connect() // get new client from pool
    const result = func.call(this, client)
    client.release()
    return result // return client to pool
}

export default defineNitroPlugin(async (nitro) => {

    await pool.connect().then((value) => {
        console.log("Postgres connection established with", value.database, "on", value.host)
    })

    nitro.hooks.hookOnce("close", async () => {
        await new Promise<void>((resolve) => pool.end(() => resolve()))
        console.log("db connection closed")
    })
})
