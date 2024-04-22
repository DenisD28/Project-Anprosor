import { FormSilos } from './FormSilos'
import { Button } from '@/components/ui/button'
import { EliminarSilos } from './EliminarSilos'
import { TableCell, TableRow } from '@/components/ui/table'
import { IconEditCircle, IconTrash } from '@tabler/icons-react'

export const FilaTablaSilos = () => {
    return (
        <TableRow>
            <TableCell>Silos</TableCell>
            <TableCell className='flex justify-center gap-2.5'>
                <FormSilos
                    action='edit'
                    title='Editar Datos Del Silo'
                    description='Ingrese la nueva informacion del silo'
                >
                    <Button variant={'secondary'} size={'icon'}>
                        <IconEditCircle />
                    </Button>
                </FormSilos>
                <EliminarSilos>
                    <Button variant={'destructive'} size={'icon'}>
                        <IconTrash />
                    </Button>
                </EliminarSilos>
            </TableCell>
        </TableRow>
    )
}
