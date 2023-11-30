import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { useQuery } from '@tanstack/react-query'
import { GetServicios } from '@/services/servicios.Servicios'
import { FilaTablaServicios } from './FilaTablaServicios'

export const TablaServicios = () => {
  const { data: listServicios } = useQuery({
    queryKey: ['services'],
    queryFn: GetServicios
  })
  return (
    <Table>
      <TableCaption>Lista de Servicios registrados en el sistema</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Nombre del Servicio</TableHead>
          <TableHead>Descripción del Servicio</TableHead>
          <TableHead className='w-40 text-center'>Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {listServicios?.map((servicio) => (
          <FilaTablaServicios key={servicio.id} {...servicio} />
        ))}
      </TableBody>
    </Table>
  )
}
