export const add = (req, res) => {
  const data = req.body
  const autorization = req.auth
  res.json({ message: 'Hola buenas' })
  try {
    res.json({ message: 'Usuario añadido correctamente' })
  } catch (error) {
    res.json({ message: error.message })
  }
}

export const update = (req, res) => {
  const data = req.body
  const autorization = req.auth
  try {
    res.json({ message: 'Usuario actualizado correctamente' })
  } catch (error) {
    res.json({ message: error.message })
  }
}

export const remove = (req, res) => {
  const data = req.body
  const autorization = req.auth
  try {
    res.json({ message: 'Usuario eliminado correctamente' })
  } catch (error) {
    res.json({ message: error.message })
  }
}
