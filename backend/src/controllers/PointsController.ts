import { Request, Response } from 'express'
import knex from '../database/connection'

class PointsController {
    async show(req: Request, res: Response){
        
    }

    async create(req: Request, res: Response) {
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

        const point = {
            image: 'image_fake',
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf
        }

        const ids = await trx('points').insert(point)

        const point_id = ids[0]

        const pointItems = items.map((item_id: Number) => {
            return {
                item_id,
                point_id
            }
        })

        //RELACIONAMENTO COM A TABELA DE ITEMS
        await trx('point_items').insert(pointItems)

        return res.json({
            id:point_id,
            ...point
        })
    }
}

export default new PointsController()