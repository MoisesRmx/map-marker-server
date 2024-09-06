import { expressjwt } from 'express-jwt'
export const validateJwt = expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] })
