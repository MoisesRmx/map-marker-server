import { model } from 'mongoose'

export const User = model('User', {
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
