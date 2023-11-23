import axios from 'axios'
import Cookies from 'js-cookie'
import type { ResponseLogin, ResponseLogout } from '@/type'

const BASE_URL = import.meta.env.VITE_BASE_URL_API
const NAME_COOKIE = 'access_token'

/**
 * Realiza un intento de inicio de sesión autenticado.
 *
 * @async
 * @function
 * @param {string} email - La dirección de correo electrónico del usuario.
 * @param {string} password - La contraseña del usuario.
 * @returns {Promise<string>} - Una promesa que se resuelve con el nombre del usuario después de un inicio de sesión exitoso.

 */
export const AuthLogin = async (
  email: string,
  password: string
): Promise<string> => {
  // Hacer la solicitud POST al servidor para iniciar sesión
  const response: ResponseLogin = await axios.post(`${BASE_URL}/auth/login`, {
    email,
    password
  })

  // Obtener el token de acceso y el nombre del usuario de la respuesta del servidor.
  const { token, user } = response.data

  // Guardar el token de acceso en una cookie
  Cookies.set(NAME_COOKIE, token)

  return user.name
}

/**
 * Realiza un intento de cierre de sesión autenticado.
 *
 * @async
 * @function
 * @returns {Promise<string>} - Una promesa que se resuelve con un mensaje indicando el éxito del cierre de sesión.
 */
export const AuthLogout = async (): Promise<string> => {
  // Configurar la cabecera de la solicitud con el token de acceso del usuario.
  const config = {
    headers: {
      Authorization: `Bearer ${Cookies.get(NAME_COOKIE)}`,
      'Content-Type': 'application/json'
    }
  }

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
