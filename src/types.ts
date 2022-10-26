import { Types } from 'mongoose'

// role
export interface RoleType { name: 'manager' | 'clerk' | 'trainer' | 'customer' }

// status for users
export enum StatusType {
  Active = 'active',
  Inactive = 'inactive',
  Expired = 'expired',
  Right = 'deleted'
}

// user
export interface UserType {
  name: string
  user: string
  password: string
  email: string
  status?: string
  card?: []
  id_role: Types.ObjectId
  classes?: []
}
