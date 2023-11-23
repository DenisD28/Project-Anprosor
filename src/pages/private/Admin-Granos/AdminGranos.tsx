import { Button } from '@/components/ui/button'
import { IconCirclePlus } from '@tabler/icons-react'
import { FormGranos } from '@/pages/private/Admin-Granos/components/FormGranos'
import { TablaGranos } from '@/pages/private/Admin-Granos/components/TablaGranos'

export default function AdminGranos() {
  return (
    <section className='flex flex-col gap-4'>
      <header className='text-3xl font-bold'>Granos registrados</header>

      <FormGranos
        action='create'
        title='Agregar Nuevo Grano'
        description='Ingrese la informacion del grano'
      >
        <Button className='self-end flex gap-2 w-40'>
          <IconCirclePlus />
          Nuevo Grano
        </Button>
      </FormGranos>

      <div className='h-[75vh] overflow-y-scroll'>
        <TablaGranos />
      </div>
    </section>
  )
}
