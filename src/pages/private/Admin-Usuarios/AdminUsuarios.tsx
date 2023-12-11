import { Button } from '@/components/ui/button'
import { IconCirclePlus } from '@tabler/icons-react'
import { TablaUsuarios } from '@/pages/private/Admin-Usuarios/components/TablaUsuarios'
import { FormUsuarios } from '@/pages/private/Admin-Usuarios/components/FormUsuarios'

export default function AdminUsuarios() {
  return (
    <section className='flex flex-col gap-4'>
      <header className='text-3xl font-bold'>Usuarios registrados</header>

      <FormUsuarios
        action='create'
        title='Agregar Nuevo Usuario'
        description='Ingrese la informacion del usuario'
      >
        <Button className='self-end flex gap-2 w-40'>
          <IconCirclePlus />
          Nuevo Usuario
        </Button>
      </FormUsuarios>

      <div className='h-[75vh] overflow-y-scroll'>
        <TablaUsuarios />
      </div>
    </section>
  )
}
