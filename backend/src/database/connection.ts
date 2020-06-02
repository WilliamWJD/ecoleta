import knex from 'knex'
import { resolve } from 'path'

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: resolve(__dirname, 'src', 'database', 'database.sqlite'),
    }
})

export default connection