import CryptoJS from 'crypto-js'
const DESCRYPTION_KEY = import.meta.env.VITE_KEY

export const EncryptedToken = (token: string): string => {
  const encryptedToken = CryptoJS.AES.encrypt(
    token,
    DESCRYPTION_KEY,
    {}
  ).toString()

  return encryptedToken
}
