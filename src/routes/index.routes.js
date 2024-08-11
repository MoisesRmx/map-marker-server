import { Router } from 'express';
import cors from 'cors'
import path from 'path'

/*
let corsOptions = {
  "origin": "*",
  "methods": "GET",
  "optionsSuccessStatus": 200
}
*/

const router = Router();

router.get('/markerkey', (req, res) => {
  try {
    res.status(200)
      .header('Access-Control-Allow-Origin', 'http://localhost:3000')
      .json({ key: 'AIzaSyBI-iOQt72TarcbqzCHqbaGROXeqE9CPHc' })
  } catch (err) {
    res.status(404).json({ message: "No tienes acceso a este sitio" })
    console.error({ message: "No tienes acceso a este sitio" })
  }



})

export default router;
