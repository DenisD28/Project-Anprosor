import { FormServicios } from './FormServicios'
import { Button } from '@/components/ui/button'
import { EliminarServicio } from './EliminarGrano'
import { TableCell, TableRow } from '@/components/ui/table'
import { IconEditCircle, IconTrash } from '@tabler/icons-react'

export const FilaTablaServicios = () => {
  return (
    <TableRow>
      <TableCell>Almacenamiento</TableCell>
      <TableCell className='flex justify-center gap-2.5'>
        <FormServicios
          action='edit'
          title='Editar Datos Del Servicio'
          description='Ingrese la nueva informacion del servicio'
        >
          <Button variant={'secondary'} size={'icon'}>
            <IconEditCircle />
          </Button>
        </FormServicios>

        <EliminarServicio>
          <Button variant={'destructive'} size={'icon'}>
            <IconTrash />
          </Button>
        </EliminarServicio>
      </TableCell>
    </TableRow>
  )
}
