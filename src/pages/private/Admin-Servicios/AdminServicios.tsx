import { Button } from '@/components/ui/button'
import { IconCirclePlus } from '@tabler/icons-react'
import { TablaServicios } from '@/pages/private/Admin-Servicios/components/TablaServicios'
import { FormServicios } from '@/pages/private/Admin-Servicios/components/FormServicios'

export const AdminServicios = () => {
  return (
    <section className='flex flex-col gap-4'>
      <header className='text-3xl font-bold'>Servicios registrados</header>

      <FormServicios
        action='create'
        title='Agregar Nuevo Servicio'
        description='Ingrese la informacion del servicio'
      >
        <Button className='self-end flex gap-2 w-40'>
          <IconCirclePlus />
          Nuevo Servicio
        </Button>
      </FormServicios>

      <div className='h-[75vh] overflow-y-scroll'>
        <TablaServicios />
      </div>
    </section>
  )
}
