// role
export interface RoleType { name: 'manager' | 'clerk' | 'trainer' | 'customer' }

// user
export enum StatusType {
  Active = 'active',
  Inactive = 'inactive',
  Expired = 'expired',
  Right = 'deleted'
}
export interface UserType {
  name: string
  user: string
  password: string
  email: string
  status?: string
  card?: []
  id_role: string
  classes?: []
}
