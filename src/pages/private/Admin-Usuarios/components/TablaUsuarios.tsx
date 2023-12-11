import {
    Table,
    TableBody,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table'
import { useQuery } from '@tanstack/react-query'

import { FilaTablaUsuarios } from './FilaTablaUsuarios'
import { GetUsuarios } from '@/services/servicios.Usuarios'

export const TablaUsuarios = () => {
    const { data: listUsuarios } = useQuery({
        queryKey: ['users'],
        queryFn: GetUsuarios
    })

    return (
        <Table>
            <TableCaption>Lista de usuarios registrados en el sistema</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Nombre del usuario</TableHead>
                    <TableHead>Correo electronico</TableHead>
                    <TableHead>Rol</TableHead>
                    <TableHead className='text-center'>Acciones</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {listUsuarios?.map((client) => (
                    <FilaTablaUsuarios key={client.user_id} {...client} />
                ))}
            </TableBody>
        </Table>
    )
}
