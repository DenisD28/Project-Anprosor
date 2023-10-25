import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { FilaTablaServicios } from './FilaTablaServicios'

export const TablaServicios = () => {
  return (
    <Table>
      <TableCaption>Lista de Granos registrados en el sistema</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Nombre del Servicio</TableHead>
          <TableHead className='text-center'>Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <FilaTablaServicios />
      </TableBody>
    </Table>
  )
}
