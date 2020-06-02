import { Router } from 'express'
import knex from './database/connection'

const routes = Router()

routes.get('/items', async (req,res)=>{
    const items = await knex('items').select('*')

    const serializedItems = items.map(item => {
        return {
            id: item.id,
            title: item.title,
            image_url: `http://localhost:3333/uploads/${item.image}`
        }
    })

    return res.json(serializedItems)
})

routes.post('/points', async (req,res) => {
    const {
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf,
        items
    } = req.body

    const trx = await knex.transaction()

    const ids = await trx('points').insert({
        image: 'image_fake',
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf
    })

    const point_id = ids[0]

    const pointItems = items.map((item_id: Number) => {
        return{
            item_id,
            point_id
        }
    })

    //RELACIONAMENTO COM A TABELA DE ITEMS
    await trx('point_items').insert(pointItems)

    return res.json({ sucess:true })
})

export default routes