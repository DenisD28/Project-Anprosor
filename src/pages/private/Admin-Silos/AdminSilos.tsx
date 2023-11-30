import { Button } from '@/components/ui/button'
import { IconCirclePlus } from '@tabler/icons-react'
import { TablaSilos } from '@/pages/private/Admin-Silos/components/TablaSilos'
import { FormSilos } from '@/pages/private/Admin-Silos/components/FormSilos'

export default function AdminSilos() {
  return (
    <section className='flex flex-col gap-4'>
      <header className='text-3xl font-bold'>Silos registrados</header>

      <FormSilos
        action='create'
        title='Agregar Nuevo Silo'
        description='Ingrese la informacion de silo'
      >
        <Button className='self-end flex gap-2 w-40'>
          <IconCirclePlus />
          Nuevo Silo
        </Button>
      </FormSilos>

      <div className='h-[75vh] overflow-y-scroll'>
        <TablaSilos />
      </div>
    </section>
  )
}
