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

export const TablaUsuarios = () => {
    // const { data: listUsuarios } = useQuery({
    //     queryKey: ['clients'],
    //     queryFn: GetUsuarios
    // })

    // return (
    //     <Table>
    //         <TableCaption>Lista de clientes registrados en el sistema</TableCaption>
    //         <TableHeader>
    //             <TableRow>
    //                 <TableHead>Nombre del cliente</TableHead>
    //                 <TableHead>Numero del telefono</TableHead>
    //                 <TableHead>Correo electronico</TableHead>
    //                 <TableHead className='text-center'>Acciones</TableHead>
    //             </TableRow>
    //         </TableHeader>
    //         <TableBody>
    //             {listUsuarios?.map((client) => (
    //                 <FilaTablaUsuarios key={client.id} {...client} />
    //             ))}
    //         </TableBody>
    //     </Table>
    // )
}
