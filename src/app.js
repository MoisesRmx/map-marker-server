import express from 'express';
import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import mongoose from 'mongoose'
import cors from 'cors'

mongoose.connect(process.env.DB_URL)
  .then(db => console.log('Db is connected'))
  .catch(error => console.log(error))

const app = express();

app.disable('x-powered-by')
app.use(express.json())

app.use(cors({
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

app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use((req, res) => {
  res.status(404).json("<h1>La pagina que buscas no existe o esta dañada</h1>")
})

export default app;
