import { FormUsuarios } from './FormUsuarios'
import { Button } from '@/components/ui/button'
import { EliminarUsuarios } from './EliminarUsuarios'
import { TableCell, TableRow } from '@/components/ui/table'
import { IconEditCircle, IconTrash } from '@tabler/icons-react'

export const FilaTablaUsuarios = () => {
    return (
        <TableRow>
            <TableCell>Almacenamiento</TableCell>
            <TableCell className='flex justify-center gap-2.5'>
                <FormUsuarios
                    action='edit'
                    title='Editar Datos Del usuario'
                    description='Ingrese la nueva informacion del usuario'
                >
                    <Button variant={'secondary'} size={'icon'}>
                        <IconEditCircle />
                    </Button>
                </FormUsuarios>

                <EliminarUsuarios>
                    <Button variant={'destructive'} size={'icon'}>
                        <IconTrash />
                    </Button>
                </EliminarUsuarios>
            </TableCell>
        </TableRow>
    )
}
