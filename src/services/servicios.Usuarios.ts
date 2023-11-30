import { type Silo } from '@/type'
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

export const GetSilos = async (): Promise<Silo[]> => {
    const response = await axios.get(`${BASE_URL}/silo?paginate=false`, config)

    const listGrain: Silo[] = response.data.silos

    return listGrain
}

export const CreacteSilos = async (data: Silo): Promise<void> => {
    await axios.post(`${BASE_URL}/silo`, data, config)
}

export const DeleteSilos = async (id: number): Promise<void> => {
    await axios.delete(`${BASE_URL}/silo/${id}`, config)
}

export const UpdateSilos = async (data: Silo): Promise<void> => {
    await axios.patch(
        `${BASE_URL}/silo/${data.id}?code=${data.code}&name=${data.name}`,
        {},
        config
    )
}
