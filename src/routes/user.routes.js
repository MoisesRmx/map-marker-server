import { Router } from 'express'

import { validateJwt } from '../controllers/validateJwt.controller.js'
import * as userController from '../controllers/user.controller.js'

const userRouter = Router()

userRouter.post('/add', validateJwt, userController.add)

userRouter.post('/update', validateJwt, userController.update)

userRouter.delete('/remove', validateJwt, userController.remove)

export default userRouter
