/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import Role from '../models/role-schema.js'
import { ddbbConnection } from '../config/ddbb.js'
import { RoleType } from '../types.js'
import { UserType } from '../types'
import User from '../models/user-schema.js'

dotenv.config()

const rolesData: RoleType[] = [
  { name: 'manager' },
  { name: 'clerk' },
  { name: 'trainer' },
  { name: 'customer' }
]

const USER_DATA: UserType = {
  name: process.env.USER_NAME ?? '',
  user: process.env.USER_USERNAME ?? '',
  password: process.env.USER_PASSOWRD ?? '',
  email: process.env.USER_EMAIL ?? '',
  status: process.env.USER_STATUS ?? 'active',
  id_role: ''
}

const seedAll = async () => {
  try {
    await ddbbConnection()
    let roles = await Role.find()
    if (roles.length < 1) roles = await Role.insertMany(rolesData) // insert the documents within rolesData
    const users = await User.find()
    if (users.length < 1) await User.create({ ...USER_DATA, id_role: roles[0]._id }) // insert the documents within rolesData
    await mongoose.connection.close()
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

seedAll()
