import { type Client } from '@/type'
import axios from 'axios'
import Cookies from 'js-cookie'

const BASE_URL = import.meta.env.VITE_BASE_URL_API
const NAME_COOKIE = import.meta.env.VITE_NAME_COOKIE

const config = {
  headers: {
    Authorization: `Bearer ${Cookies.get(NAME_COOKIE)}`,
    'Content-Type': 'application/json'
  }
}

export const GetClientes = async (): Promise<Client[]> => {
  const response = await axios.get(`${BASE_URL}/client?paginate=false`, config)

  const listClients: Client[] = response.data.clients

  return listClients
}

export const CreacteCliente = async (data: Client): Promise<void> => {
  await axios.post(`${BASE_URL}/client`, data, config)
}

export const DeleteCliente = async (id: number): Promise<void> => {
  await axios.delete(`${BASE_URL}/client/${id}`, config)
}

export const UpdateCliente = async (data: Client): Promise<void> => {
  await axios.patch(
    `${BASE_URL}/client/${data.id}?name=${data.name}&phone=${data.phone}&email=${data.email}`,
    {},
    config
  )
}
