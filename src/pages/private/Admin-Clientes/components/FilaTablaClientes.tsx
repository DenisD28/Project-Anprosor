import { FormCliente } from './FormCliente'
import { Button } from '@/components/ui/button'
import { EliminarCliente } from './EliminarCliente'
import { TableCell, TableRow } from '@/components/ui/table'
import { IconEditCircle, IconTrash } from '@tabler/icons-react'
import { type Client } from '@/type'

export const FilaTablaClientes = (data: Client) => {
  return (
    <TableRow>
      <TableCell>{data.name}</TableCell>
      <TableCell>{data.phone}</TableCell>
      <TableCell>{data.email}</TableCell>
      <TableCell className='flex justify-center gap-2.5'>
        <FormCliente
          action='update'
          infoCliente={data}
          title='Editar Datos Del Cliente'
          description='Ingrese la nueva informacion del cliente'
        >
          <Button variant={'secondary'} size={'icon'}>
            <IconEditCircle />
          </Button>
        </FormCliente>

        <EliminarCliente idCliente={data.id ?? 0}>
          <Button variant={'destructive'} size={'icon'}>
            <IconTrash />
          </Button>
        </EliminarCliente>
      </TableCell>
    </TableRow>
  )
}
