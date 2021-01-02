import { RequestHandler } from 'express'
import { UserModel } from './model'

export const createUser: RequestHandler = async (req, res) => {
  const userFound = await UserModel.findOne({ email: req.body.email })

  if (userFound) return res.status(301).json({ message: 'The email already exist' })

  try {

    const user = new UserModel(req.body)
    const userSaved = await user.save()
    res.status(200).json(userSaved)

  } catch (err) {

    console.error(err)

  }
}

export const getUsers: RequestHandler = async (req, res) => {
  try {

    const users = await UserModel.find()
    res.status(200).json(users)

  } catch (err) {

    console.error(err)

  }
}

export const getUser: RequestHandler = async (req, res) => {
  const userFound = await UserModel.findById(req.params.id)

  if (!userFound) return res.status(204).json({ message: 'User Not Found' })

  return res.json(userFound)
}

export const updateUser: RequestHandler = async (req, res) => { // To do
  console.log('User to update', req.params)

  res.status(200).json({ message: 'User Updated' })
}

export const deleteUser: RequestHandler = async (req, res) => { // To do
  console.log('User to delete', req.params)

  res.status(200).json({ message: `User Deleted ${req.params.id}` })
}