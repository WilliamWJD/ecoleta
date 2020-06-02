import knex from 'knex'
import dbConfig from '../config/database'

const connection = knex(dbConfig)

export default connection