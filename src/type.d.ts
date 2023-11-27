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

export interface Client {
  id?: number
  name: string
  email: string
  phone: string
}

export interface ILogin {
  email: string
  password: string
}
