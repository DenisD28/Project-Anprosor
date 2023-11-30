import { type Grain } from '@/type'
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

export const GetGranos = async (): Promise<Grain[]> => {
  const response = await axios.get(`${BASE_URL}/grain?paginate=false`, config)

  const listGrain: Grain[] = response.data.grains

  return listGrain
}

export const CreacteGrano = async (data: Grain): Promise<void> => {
  await axios.post(`${BASE_URL}/grain`, data, config)
}

export const DeleteGrano = async (id: number): Promise<void> => {
  await axios.delete(`${BASE_URL}/grain/${id}`, config)
}

export const UpdateGrano = async (data: Grain): Promise<void> => {
  await axios.patch(
    `${BASE_URL}/grain/${data.id}?code=${data.code}&name=${data.name}`,
    {},
    config
  )
}
