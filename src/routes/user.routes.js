import { Router } from 'express';
import cors from 'cors'

import * as user from '../controllers/auth.controller.js'

const router = Router();

router.use(cors({
  origin: (origin, callback) => {
    const ACCEPTED_ORIGINS = [
      'http://localhost:3000',
      'http://localhost:5173'
    ]

    if (ACCEPTED_ORIGINS.includes(origin)) {
      return callback(null, true)
    }
    if (!origin) {
      return callback(null, true)
    }

    return callback(new Error('No Allowed Cors'))
  }
}))

router.post('/login', user.login)

router.post('/register', user.register)

router.get('/findUser', user.find)

router.get('/infos', user.validateJwt, user.products)

router.delete('/removeUser', user.remove)

export default router;
