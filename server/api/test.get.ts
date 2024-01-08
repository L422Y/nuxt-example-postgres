import { withPG } from "../plugins/pg"

export default eventHandler(async (event) => {
    return await withPG(event, async (dbClient) => {
        return await dbClient.query("SELECT * FROM rnc_database")
    })
})
