import { type Service } from '@/type'
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

export const GetServicios = async (): Promise<Service[]> => {
  const response = await axios.get(`${BASE_URL}/service?paginate=false`, config)

  const listGrain: Service[] = response.data.services

  return listGrain
}

export const CreactServicio = async (data: Service): Promise<void> => {
  await axios.post(`${BASE_URL}/service`, data, config)
}

export const DeleteServicio = async (id: number): Promise<void> => {
  await axios.delete(`${BASE_URL}/service/${id}`, config)
}

export const UpdatServicio = async (data: Service): Promise<void> => {
  await axios.patch(
    `${BASE_URL}/service/${data.id}?name=${data.name}&=description${data.description}`,
    {},
    config
  )
}
