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
import React, { useState } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'

interface Props {
  title: string
  description: string
  infoCliente?: any
  action: 'create' | 'edit'
  children: React.ReactNode
}

interface Inputs {
  nombre: string
  telefono: string
  correo: string
}

export const FormCliente = ({ title, description, children }: Props) => {
  const [open, setOpen] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    defaultValues: {
      nombre: 'Axell',
      telefono: '+505 1234 5678',
      correo: 'ejemplo@gmail.com'
    }
  })

  const patternTelefono = /^\+(?:[0-9] ?){6,14}[0-9]$/
  const patternCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
              placeholder='Francisco Vargas'
              {...register('nombre', {
                required: {
                  value: true,
                  message: 'El nombre es requerido'
                }
              })}
            />
            {errors.nombre != null && (
              <span className='text-xs text-red-600'>
                {errors.nombre.message}
              </span>
            )}
          </div>
          <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label htmlFor='email'>Numero de telefono</Label>
            <Input
              type='text'
              placeholder='+000 1234 5678'
              autoComplete='off'
              {...register('telefono', {
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
            {errors.telefono != null && (
              <span className='text-xs text-red-600'>
                {errors.telefono.message}
              </span>
            )}
          </div>
          <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label htmlFor='email'>Correo</Label>
            <Input
              type='text'
              autoComplete='off'
              placeholder='ejemplo@gmail.com'
              {...register('correo', {
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
            {errors.correo != null && (
              <span className='text-xs text-red-600'>
                {errors.correo.message}
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
