import { Button } from '@/components/ui/button'
import { IconCirclePlus } from '@tabler/icons-react'
import { FormCliente } from '@/pages/private/Admin-Clientes/components/FormCliente'
import { TablaClientes } from '@/pages/private/Admin-Clientes/components/TablaClientes'

export default function AdminClientes() {
  return (
    <section className='flex flex-col gap-4'>
      <header className='text-3xl font-bold'>Clientes registrados</header>

      <FormCliente
        action='create'
        title='Agregar Nuevo Cliente'
        description='Ingrese la informacion del cliente'
      >
        <Button className='self-end flex gap-2 w-40'>
          <IconCirclePlus />
          Nuevo Cliente
        </Button>
      </FormCliente>

      <div className='h-[75vh] overflow-y-scroll'>
        <TablaClientes />
      </div>
    </section>
  )
}
