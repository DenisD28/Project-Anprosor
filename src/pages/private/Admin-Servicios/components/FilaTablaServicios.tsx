import { type Service } from '@/type'
import { FormServicios } from './FormServicios'
import { Button } from '@/components/ui/button'
import { EliminarServicio } from './EliminarServicio'
import { TableCell, TableRow } from '@/components/ui/table'
import { IconEditCircle, IconTrash } from '@tabler/icons-react'

export const FilaTablaServicios = (data: Service) => {
  return (
    <TableRow>
      <TableCell>{data.name}</TableCell>
      <TableCell>{data.description}</TableCell>
      <TableCell className='flex justify-center gap-2.5'>
        <FormServicios
          action='update'
          infoService={data}
          title='Editar Datos Del Servicio'
          description='Ingrese la nueva informacion del servicio'
        >
          <Button variant={'secondary'} size={'icon'}>
            <IconEditCircle />
          </Button>
        </FormServicios>

        <EliminarServicio idService={data.id}>
          <Button variant={'destructive'} size={'icon'}>
            <IconTrash />
          </Button>
        </EliminarServicio>
      </TableCell>
    </TableRow>
  )
}
