import { Router } from 'express'
import multer from 'multer'
import multerConfig from './config/multer'
import { celebrate, Joi } from 'celebrate'

import PointController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

const routes = Router()
const upload = multer(multerConfig)

routes.get('/items', ItemsController.index)

routes.post(
    '/points', 
    upload.single('image'),
    celebrate({
        body: Joi.object().keys({
            name:Joi.string().required(),
            email:Joi.string().required().email(),
            whatsapp:Joi.number().required(),
            latitude:Joi.number().required(),
            longitude:Joi.number().required(),
            city:Joi.string().required(),
            uf:Joi.string().required().max(2),
            items:Joi.string().required()
        })
    },{
        abortEarly:false
    }),
    PointController.create
)

routes.get('/points/:id', PointController.show)
routes.get('/points', PointController.index)

export default routes