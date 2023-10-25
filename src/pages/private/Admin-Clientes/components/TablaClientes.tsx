import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { FilaTablaClientes } from './FilaTablaClientes'

export const TablaClientes = () => {
  return (
    <Table className=''>
      <TableCaption>Lista de clientes registrados en el sistema</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Nombre del cliente</TableHead>
          <TableHead>Numero del telefono</TableHead>
          <TableHead>Correo electronico</TableHead>
          <TableHead className='text-center'>Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <FilaTablaClientes />
      </TableBody>
    </Table>
  )
}
