import { model } from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const User = model('User', {
  name: {
    type: String,
    required: true,
    minLength: 3
  },
  lastname: {
    type: String,
    required: true,
    minLength: 3
  },
  email: {
    type: String,
    required: true,
    minLength: 3
  },
  password: {
    type: String,
    required: true,
    minLength: 3
  },
  salt: {
    type: String,
    required: true,
    minLength: 3
  },
  key: {
    type: String
  },
  locations: {
    type: Array
  }
})

const signToken = (_id) => jwt.sign({ _id }, process.env.SECRET)

export class UserActions {
  static async create({ name, lastname, email, password }) {
    const user = await User.findOne({ email })
    if (user) throw new Error('user already exists')

    const salt = await bcrypt.genSalt()
    const hash = await bcrypt.hash(password, salt)
    const userCreate = await User.create({ name, lastname, email, password: hash, salt })
    const signed = signToken(userCreate._id)
    return { user: userCreate._id, signed }
  }
  static async login({ email, password }) {
    const user = await User.findOne({ email })
    if (!user) throw new Error('user not found')

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) throw new Error('user is invalid')
    const signed = signToken(user._id)
    return signed
  }
  static async find({ email }) {
    const user = await User.findOne({ email })
    if (!user) throw new Error('user don\'t find')
    return user
  }
  static async delete({ email }) {
    const user = await User.findOne({ email })
    if (!user) throw new Error('user don\'t find')
    return user.deleteOne().then(() => {
      return "Usuario borrado correctamente"
    })
  }
}
