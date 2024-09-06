import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import { User } from '../models/user.model.js'

const signToken = (_id) => jwt.sign({ _id }, process.env.SECRET)

export const login = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email })
    if (!user) throw new Error('user not found')
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) throw new Error('user is invalid')
    const signed = signToken(user._id)
    res.send(signed)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const register = async (req, res) => {
  const { name, lastname, email, password } = req.body
  try {
    const user = await User.findOne({ email })
    if (user) throw new Error('user already exists')
    const salt = await bcrypt.genSalt()
    const hash = await bcrypt.hash(password, salt)
    const userCreate = await User.create({ name, lastname, email, password: hash, salt })
    const signed = signToken(userCreate._id)
    res.send({ user: userCreate._id, signed })
  } catch (error) {
    res.status(401).json({ message: error.message })
  }
}

export const find = async (req, res) => {
  try {
    const { email } = req.body
    const user = await User.findOne({ email })
    if (!user) throw new Error('user don\'t find')
    res.send(user)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const remove = async (req, res) => {
  try {
    const { email } = req.body
    const user = await User.findOne({ email })
    if (!user) throw new Error('user don\'t find')
    return user.deleteOne().then(() => {
      res.send("Usuario borrado correctamente")
    })
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
