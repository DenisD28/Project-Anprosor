interface User {
  name: string
  email: string
  is_active: number
  change_password: number
  last_password_change_at: null
  last_login_at: Date
}

export interface ResponseLogout {
  data: DataLogout
}

interface DataLogout {
  message: string
  status: number
}

type ActionForm = 'create' | 'update'

export interface Client {
  id: number
  name: string
  email: string
  phone: string
}

export interface Grain {
  id: number
  code: string
  name: string
}

export interface Service {
  id: number
  name: string
  description: string
}

export interface ILogin {
  email: string
  password: string
}

export interface Usuario {
  user_id: number
  name: string
  email: string
  role_id: number
}

export interface Silo {
  code: string
  name: string
  capacity_total: string
  unit_of_measure: string
}