import { FormGranos } from './FormGranos'
import { Button } from '@/components/ui/button'
import { EliminarGrano } from './EliminarGrano'
import { TableCell, TableRow } from '@/components/ui/table'
import { IconEditCircle, IconTrash } from '@tabler/icons-react'

export const FilaTablaGranos = () => {
  return (
    <TableRow>
      <TableCell>Maiz</TableCell>
      <TableCell className='flex justify-center gap-2.5'>
        <FormGranos
          action='edit'
          title='Editar Datos Del Grano'
          description='Ingrese la nueva informacion del grano'
        >
          <Button variant={'secondary'} size={'icon'}>
            <IconEditCircle />
          </Button>
        </FormGranos>

        <EliminarGrano>
          <Button variant={'destructive'} size={'icon'}>
            <IconTrash />
          </Button>
        </EliminarGrano>
      </TableCell>
    </TableRow>
  )
}
