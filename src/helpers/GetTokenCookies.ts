/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import Cookies from 'js-cookie'
import CryptoJS from 'crypto-js'

const DESCRYPTION_KEY = import.meta.env.VITE_KEY
const NAME_COOKIE = import.meta.env.VITE_NAME_COOKIE
const GetTokenCookies = () => {
  const token = Cookies.get(NAME_COOKIE)

  if (token) {
    const bytes = CryptoJS.AES.decrypt(token, DESCRYPTION_KEY)
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8)
    return decryptedData
  }

  return null
}

export const Headers = () => {
  const config = {
    headers: {
      Authorization: `Bearer ${GetTokenCookies()}`,
      'Content-Type': 'application/json'
    }
  }

  return config
}
