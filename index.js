import app from './src/app.js'

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Aplicación corriendo en el puerto ${PORT}`)
})
