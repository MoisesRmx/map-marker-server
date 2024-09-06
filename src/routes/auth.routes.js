import { Router } from 'express';

import { validateJwt } from '../controllers/validateJwt.controller.js'
import * as authController from '../controllers/auth.controller.js'

const authRouter = Router();

authRouter.post('/login', authController.login)

authRouter.post('/register', authController.register)

authRouter.get('/find', authController.find)

authRouter.get('/infos', validateJwt, authController.products)

authRouter.delete('/remove', authController.remove)

export default authRouter;
