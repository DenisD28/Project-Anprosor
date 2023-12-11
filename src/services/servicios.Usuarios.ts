import { type Usuario } from '@/type'
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

export const GetUsuarios = async (): Promise<Usuario[]> => {
    const response = await axios.get(`${BASE_URL}/user/list`, config)

    const listGrain: Usuario[] = response.data.silos

    return listGrain
}

export const CreacteUsuarios = async (data: Usuario): Promise<void> => {
    await axios.post(`${BASE_URL}/silo`, data, config)
}

// export const DeleteUsuarios = async (id: number): Promise<void> => {
//     await axios.delete(`${BASE_URL}/silo/${id}`, config)
// }

export const cambioEstado = async (data: number): Promise<void> => {
    await axios.post(`${BASE_URL}/user/change_status`, data, config)
}

export const UpdateUsuarios = async (data: Usuario): Promise<void> => {
    await axios.patch(
        `${BASE_URL}/user/update?name=${data.name}`,
        {},
        config
    )
}
