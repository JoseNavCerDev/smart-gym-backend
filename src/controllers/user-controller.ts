/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express'
import User from '../models/user-schema.js'

// FUNCTION to read USER
export async function index (req: Request, res: Response, next: NextFunction) {
  try {
    const { user } = req.body
    const userFromDDBB = await User.findOne({ user })
    res.send(userFromDDBB)
  } catch (error) {
    return next(error)
  }
}

// Function to create NEW USER
export async function create (req: Request, res: Response, next: NextFunction) {
  try {
    const newUser = new User(req.body)
    const userSaved = await newUser.save()
    return res.status(200).send(userSaved._id)
  } catch (error) {
    return next(error)
  }
}

// FUNCTION to update USER
export async function update (req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params
    const userFromDDBB = await User.findById(id)
    res.send(userFromDDBB)
  } catch (error) {
    return next(error)
  }
}
