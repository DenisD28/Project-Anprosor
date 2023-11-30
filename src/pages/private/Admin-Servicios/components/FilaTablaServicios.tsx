import { type Service } from '@/type'
import { FormServicios } from './FormServicios'
import { Button } from '@/components/ui/button'
import { EliminarServicio } from './EliminarServicio'
import { TableCell, TableRow } from '@/components/ui/table'
import { IconEditCircle, IconTrash } from '@tabler/icons-react'

export const FilaTablaServicios = ({ id, name, description }: Service) => {
  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{description}</TableCell>
      <TableCell className='flex justify-center gap-2.5'>
        <FormServicios
          action='update'
          title='Editar Datos Del Servicio'
          description='Ingrese la nueva informacion del servicio'
        >
          <Button variant={'secondary'} size={'icon'}>
            <IconEditCircle />
          </Button>
        </FormServicios>

        <EliminarServicio idService={id}>
          <Button variant={'destructive'} size={'icon'}>
            <IconTrash />
          </Button>
        </EliminarServicio>
      </TableCell>
    </TableRow>
  )
}
