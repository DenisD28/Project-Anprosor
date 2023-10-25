import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { FilaTablaGranos } from './FilaTablaGranos'

export const TablaGranos = () => {
  return (
    <Table>
      <TableCaption>Lista de Granos registrados en el sistema</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Nombre del Grano</TableHead>
          <TableHead className='text-center'>Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <FilaTablaGranos />
      </TableBody>
    </Table>
  )
}
