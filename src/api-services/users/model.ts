import { UserIF } from './type-models';
import { model, Schema, Model, SchemaOptions } from 'mongoose'

const UserSchemaOptions: SchemaOptions = {
  versionKey: false, // Obviamos el __v de mongodb
  timestamps: true, // Agregamos el createAt / updateAt de mongodb
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
}, UserSchemaOptions)

export const UserModel: Model<UserIF> = model<UserIF>('User', UserSchema)
