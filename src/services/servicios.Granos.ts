import axios from 'axios'
import { type Grain } from '@/type'
import { Headers } from '@/helpers/GetTokenCookies'

const BASE_URL = import.meta.env.VITE_BASE_URL_API

export const GetGranos = async (): Promise<Grain[]> => {
  const response = await axios.get(
    `${BASE_URL}/grain?paginate=false`,
    Headers()
  )

  const listGrain: Grain[] = response.data.grains

  return listGrain
}

export const CreacteGrano = async (data: Grain): Promise<void> => {
  await axios.post(`${BASE_URL}/grain`, data, Headers())
}

export const DeleteGrano = async (id: number): Promise<void> => {
  await axios.delete(`${BASE_URL}/grain/${id}`, Headers())
}

export const UpdateGrano = async (data: Grain): Promise<void> => {
  await axios.put(`${BASE_URL}/grain/${data.id}`, data, Headers())
}
