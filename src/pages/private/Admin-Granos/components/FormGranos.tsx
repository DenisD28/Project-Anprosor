import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter
} from '@/components/ui/dialog'
import { type ActionForm, type Grain } from '@/type'
import { useFormGranos } from '@/pages/private/Admin-Granos/hooks/useFormGranos'

interface Props {
  title: string
  description: string
  infoGrain?: Grain
  action: ActionForm
  children: React.ReactNode
}

export const FormGranos = ({
  title,
  action,
  children,
  infoGrain,
  description
}: Props) => {
  const { register, errors, handleSubmit, onSubmit, openModal, setOpenModal } =
    useFormGranos(action, infoGrain)

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
              placeholder='Maiz'
              {...register('name', {
                required: {
                  value: true,
                  message: 'El nombre del grano es requerido'
                }
              })}
            />
            {errors.name != null && (
              <span className='text-xs text-red-600'>
                {errors.name.message}
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
