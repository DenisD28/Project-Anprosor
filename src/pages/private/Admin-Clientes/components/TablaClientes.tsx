import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { useQuery } from '@tanstack/react-query'

import { FilaTablaClientes } from './FilaTablaClientes'
import { GetClientes } from '@/services/servicios.Clientes'

export const TablaClientes = () => {
  const { data: listClientes } = useQuery({
    queryKey: ['clients'],
    queryFn: GetClientes
  })

  return (
    <Table>
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
        {listClientes?.map((client) => (
          <FilaTablaClientes key={client.id} {...client} />
        ))}
      </TableBody>
    </Table>
  )
}
