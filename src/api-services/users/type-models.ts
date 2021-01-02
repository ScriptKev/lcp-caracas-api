import { Document } from 'mongoose'

export interface UserIF extends Document {
  name: string,
  lastname: string,
  email: string,
  phone: string,
  _id: string
}