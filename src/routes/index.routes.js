import { Router } from 'express';
import cors from 'cors'

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

    return callback(new Error('Not allowed by CORS'))
  }
}))

router.get('/markerkey', (req, res) => {
  try {
    res.status(200)
      .json({ key: process.env.API_KEY })
  } catch (err) {
    res.status(404).json({ message: "No tienes acceso a este sitio" })
    console.error({ message: "No tienes acceso a este sitio" })
  }

  console.log(process.env)


})

export default router;
