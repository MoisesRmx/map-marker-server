import express from 'express';
import router from './routes/index.routes.js';
import path from 'path';

const app = express();

router.use('/src', express.static(path.join(`${process.cwd()}/public/`)))

app.use(router)

app.use((req, res) => {
  res.status(404).json({ key: 'AIzaSyBI-iOQt72TarcbqzCHqbaGROXeqE9CPHc' })
})

export default app;
