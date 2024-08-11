import express from 'express';
import router from './routes/index.routes.js';
import path from 'path';

const app = express();

app.disable('x-powered-by')

router.use('/src', express.static(path.join(`${process.cwd()}/public/`)))

app.use(router)

app.use((req, res) => {
  res.status(404).json("<h1>La pagina que buscas no existe o esta dañada</h1>")
})

export default app;
