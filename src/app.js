import express from 'express';
import router from './routes/user.routes.js';
import mongoose from 'mongoose'

mongoose.connect(process.env.DB_URL)
  .then(db => console.log('Db is connected'))
  .catch(error => console.log(error))

const app = express();

app.disable('x-powered-by')
app.use(express.json())

app.use(router)
app.use((req, res) => {
  res.status(404).json("<h1>La pagina que buscas no existe o esta dañada</h1>")
})

export default app;
