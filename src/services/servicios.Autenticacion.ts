import axios from 'axios'
import Cookies from 'js-cookie'
import CryptoJS from 'crypto-js'
import type { ResponseLogout, ILogin, User } from '@/type'

const BASE_URL = import.meta.env.VITE_BASE_URL_API
const NAME_COOKIE = import.meta.env.VITE_NAME_COOKIE

// Configurar la cabecera de la solicitud con el token de acceso del usuario.
const config = {
  headers: {
    Authorization: `Bearer ${Cookies.get(NAME_COOKIE)}`,
    'Content-Type': 'application/json'
  }
}

export const AuthLogin = async (data: ILogin): Promise<string> => {
  // Hacer la solicitud POST al servidor para iniciar sesión
  const response = await axios.post(`${BASE_URL}/auth/login`, data)

  // Obtener el token de acceso y el nombre del usuario de la respuesta del servidor.
  const token: string = response.data.token
  const { name }: User = response.data.user

  // Guardar el token de acceso en una cookie
  const encryptedToken = CryptoJS.AES.encrypt(token, import.meta.env.VITE_KEY).toString();
  Cookies.set(NAME_COOKIE, encryptedToken)

  return name
}

export const ValidateToken = async () => {}

export const AuthLogout = async (): Promise<string> => {
  // Hacer la solicitud POST al servidor para cerrar sesión y obtener el mensaje de éxito.
  const response: ResponseLogout = await axios.post(
    `${BASE_URL}/auth/logout`,
    {},
    config
  )

  // Eliminar la cookie del token de acceso.
  Cookies.remove(NAME_COOKIE)

  return response.data.message
}
