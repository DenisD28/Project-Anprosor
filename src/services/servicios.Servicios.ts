import axios from 'axios'
import { type Service } from '@/type'
import { Headers } from '@/helpers/GetTokenCookies'

const BASE_URL = import.meta.env.VITE_BASE_URL_API

export const GetServicios = async (): Promise<Service[]> => {
  const response = await axios.get(
    `${BASE_URL}/service?paginate=false`,
    Headers()
  )

  const listGrain: Service[] = response.data.services

  return listGrain
}

export const CreactServicio = async (data: Service): Promise<void> => {
  await axios.post(`${BASE_URL}/service`, data, Headers())
}

export const DeleteServicio = async (id: number): Promise<void> => {
  await axios.delete(`${BASE_URL}/service/${id}`, Headers())
}

export const UpdatServicio = async (data: Service): Promise<void> => {
  await axios.put(`${BASE_URL}/service/${data.id}`, data, Headers())
}
