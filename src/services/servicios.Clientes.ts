import axios from 'axios'
import { type Client } from '@/type'
import { Headers } from '@/helpers/GetTokenCookies'

const BASE_URL = import.meta.env.VITE_BASE_URL_API

export const GetClientes = async (): Promise<Client[]> => {
  const response = await axios.get(
    `${BASE_URL}/client?paginate=false`,
    Headers()
  )

  const listClients: Client[] = response.data.clients

  return listClients
}

export const CreacteCliente = async (data: Client): Promise<void> => {
  await axios.post(`${BASE_URL}/client`, data, Headers())
}

export const DeleteCliente = async (id: number): Promise<void> => {
  await axios.delete(`${BASE_URL}/client/${id}`, Headers())
}

export const UpdateCliente = async (data: Client): Promise<void> => {
  await axios.put(`${BASE_URL}/client/${data.id}`, data, Headers())
}
