import { Router } from 'express'
import multer from 'multer'
import multerConfig from './config/multer'

import PointController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

const routes = Router()
const upload = multer(multerConfig)

routes.get('/items', ItemsController.index)

routes.post('/points', upload.single('image') ,PointController.create)
routes.get('/points/:id', PointController.show)
routes.get('/points', PointController.index)

export default routes