import { resolve } from 'path'

export default {
    client: 'sqlite3',
    connection: {
        filename: resolve(__dirname, 'src', 'database', 'database.sqlite'),
    }
}