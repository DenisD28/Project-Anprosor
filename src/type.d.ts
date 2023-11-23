export interface ResponseLogin {
  data: DataLogin
}
interface DataLogin {
  user: User
  token: string
  token_type: string
  message: string
  status: number
}
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
