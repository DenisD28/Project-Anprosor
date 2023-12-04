import axios from 'axios'
import Cookies from 'js-cookie'
import { EncryptedToken } from '@/helpers/EncryptedToken'
import type { ResponseLogout, ILogin, User } from '@/type'
import { Headers } from '@/helpers/GetTokenCookies'

const BASE_URL = import.meta.env.VITE_BASE_URL_API
const NAME_COOKIE = import.meta.env.VITE_NAME_COOKIE

export const AuthLogin = async (data: ILogin): Promise<string> => {
  // Hacer la solicitud POST al servidor para iniciar sesión
  const response = await axios.post(`${BASE_URL}/auth/login`, data)

  // Obtener el token de acceso y el nombre del usuario de la respuesta del servidor.
  const token: string = response.data.token
  const { name }: User = response.data.user

  // Guardar el token de acceso en una cookie
  Cookies.set(NAME_COOKIE, EncryptedToken(token))

  return name
}

export const AuthLogout = async (): Promise<string> => {
  // Hacer la solicitud POST al servidor para cerrar sesión y obtener el mensaje de éxito.
  const response: ResponseLogout = await axios.post(
    `${BASE_URL}/auth/logout`,
    {},
    Headers()
  )

  // Eliminar la cookie del token de acceso.
  Cookies.remove(NAME_COOKIE)

  return response.data.message
}
