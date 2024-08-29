import { UserActions } from '../models/user.model.js'
import { expressjwt } from 'express-jwt'

export const validateJwt = expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] })

export const login = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await UserActions.login({ email, password })
    res.send({ user })
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const register = async (req, res) => {
  const { name, lastname, email, password } = req.body
  try {
    const user = await UserActions.create({ name, lastname, email, password })
    res.send({ user })
  } catch (error) {
    res.status(401).json({ message: error.message })
  }
}

export const find = async (req, res) => {
  try {
    const { email } = req.body
    const user = await UserActions.find({ email })
    res.send({ user })
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const remove = async (req, res) => {
  try {
    const { name, lastname, email, password } = req.body
    const user = await UserActions.delete({ name, lastname, email, password })
    res.send({ user })
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const products = async (req, res) => {
  const { product, price } = req.body

  res.status(200).json({
    message: 'Hola buenas',
    product,
    price,
    id: req.auth
  })
}
