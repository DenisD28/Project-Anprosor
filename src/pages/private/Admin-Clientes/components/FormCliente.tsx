import type { ActionForm, Client } from '@/type'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useFormClientes } from '@/pages/private/Admin-Clientes/hooks/useFormClientes'

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter
} from '@/components/ui/dialog'

interface Props {
  title: string
  description: string
  infoCliente?: Client
  action: ActionForm
  children: React.ReactNode
}

export const FormCliente = ({
  title,
  action,
  children,
  description,
  infoCliente
}: Props) => {
  const { register, errors, handleSubmit, onSubmit, openModal, setOpenModal } =
    useFormClientes(action, infoCliente)

  const patternTelefono = /^\+(?:[0-9] ?){6,14}[0-9]$/
  const patternCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='max-w-sm'>
        <form
          onSubmit={(event) => {
            void handleSubmit(onSubmit)(event)
          }}
          className='space-y-4'
        >
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label htmlFor='name'>Nombre</Label>
            <Input
              type='text'
              autoComplete='off'
              placeholder='Francisco Vargas'
              {...register('name', {
                required: {
                  value: true,
                  message: 'El name es requerido'
                }
              })}
            />
            {errors.name != null && (
              <span className='text-xs text-red-600'>
                {errors.name.message}
              </span>
            )}
          </div>

          <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label htmlFor='email'>Numero de telefono</Label>
            <Input
              type='text'
              placeholder='+000 1234 5678'
              autoComplete='off'
              {...register('phone', {
                required: {
                  value: true,
                  message: 'El numero de telefono es requerido'
                },
                pattern: {
                  value: patternTelefono,
                  message: 'El numero de telefono no tiene el formato correcto'
                }
              })}
            />
            {errors.phone != null && (
              <span className='text-xs text-red-600'>
                {errors.phone.message}
              </span>
            )}
          </div>

          <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label htmlFor='email'>Correo</Label>
            <Input
              type='text'
              autoComplete='off'
              placeholder='ejemplo@gmail.com'
              {...register('email', {
                required: {
                  value: true,
                  message: 'El correo es requerido'
                },
                pattern: {
                  value: patternCorreo,
                  message: 'El correo no tiene el formato correcto'
                }
              })}
            />
            {errors.email != null && (
              <span className='text-xs text-red-600'>
                {errors.email.message}
              </span>
            )}
          </div>
          <DialogFooter>
            <Button type='submit'>Guardar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
