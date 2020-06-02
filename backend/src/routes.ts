import { Router } from 'express'

import PointController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

const routes = Router()

routes.get('/items', ItemsController.index)

routes.post('/points', PointController.create)
routes.get('/points/:id', PointController.show)
routes.get('/points', PointController.index)

export default routes