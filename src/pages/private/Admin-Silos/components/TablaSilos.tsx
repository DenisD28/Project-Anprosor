import {
    Table,
    TableBody,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table'
import { FilaTablaSilos } from './FilaTablaSilos'
import { useQuery } from '@tanstack/react-query'
import { GetSilos } from '@/services/servicios.Silos'

export const TablaSilos = () => {
    const { data: listSilo } = useQuery({
        queryKey: ['silo'],
        queryFn: GetSilos
    })

    return (
        <Table>
            <TableCaption>Lista de silos registrados en el sistema</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Nombre del silo</TableHead>
                    <TableHead>Capacidad total</TableHead>
                    <TableHead>Unidad de medida</TableHead>
                    <TableHead className='text-center'>Acciones</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {listSilo?.map((silo) => (
                    <FilaTablaSilos key={silo.code} {...silo} />
                ))}
            </TableBody>
        </Table>
    )
}
