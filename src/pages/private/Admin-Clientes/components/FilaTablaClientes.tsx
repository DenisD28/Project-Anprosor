import { FormCliente } from './FormCliente'
import { Button } from '@/components/ui/button'
import { EliminarCliente } from './EliminarCliente'
import { TableCell, TableRow } from '@/components/ui/table'
import { IconEditCircle, IconTrash } from '@tabler/icons-react'

export const FilaTablaClientes = () => {
  return (
    <TableRow>
      <TableCell>Axel David Picado</TableCell>
      <TableCell>+000 1234-5678</TableCell>
      <TableCell>test@gamil.com</TableCell>
      <TableCell className='flex justify-center gap-2.5'>
        <FormCliente
          action='edit'
          title='Editar Datos Del Cliente'
          description='Ingrese la nueva informacion del cliente'
        >
          <Button variant={'secondary'} size={'icon'}>
            <IconEditCircle />
          </Button>
        </FormCliente>

        <EliminarCliente>
          <Button variant={'destructive'} size={'icon'}>
            <IconTrash />
          </Button>
        </EliminarCliente>
      </TableCell>
    </TableRow>
  )
}
