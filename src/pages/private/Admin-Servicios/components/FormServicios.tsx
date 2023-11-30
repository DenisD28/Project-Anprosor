import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { type Service, type ActionForm } from '@/type'
import { useFormServicios } from '@/pages/private/Admin-Servicios/hooks/useFormServicios'

interface Props {
  title: string
  description: string
  infoService?: Service
  action: ActionForm
  children: React.ReactNode
}

export const FormServicios = ({
  title,
  action,
  infoService,
  description,
  children
}: Props) => {
  const { register, errors, handleSubmit, onSubmit, openModal, setOpenModal } =
    useFormServicios(action, infoService)

  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='max-w-sm'>
        <form
          onSubmit={(evente) => {
            void handleSubmit(onSubmit)(evente)
          }}
          className='space-y-4'
        >
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label htmlFor='email'>Nombre</Label>
            <Input
              type='text'
              autoComplete='off'
              placeholder='Almacenamiento'
              {...register('name', {
                required: {
                  value: true,
                  message: 'El nombre del servicios es requerido'
                }
              })}
            />
            {errors.name != null && (
              <span className='text-xs text-red-600'>
                {errors.name.message}
              </span>
            )}
          </div>

          <div className='grid w-full max-w-sm items-center gap-1.5 resizing-text-area'>
            <Label htmlFor='email'>Description</Label>
            <Textarea
              rows={6}
              autoComplete='off'
              placeholder='Almacenamiento del grano en la planta'
              {...register('description', {
                required: {
                  value: true,
                  message: 'La descripción es requerida'
                }
              })}
            />
            {errors.description != null && (
              <span className='text-xs text-red-600'>
                {errors.description.message}
              </span>
            )}
          </div>

          <DialogFooter className=''>
            <Button type='submit'>Guardar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
