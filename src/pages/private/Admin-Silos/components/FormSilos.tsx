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
    codigo: string
    nombre: string
    capacidad: number
    unidad: string
}

export const FormSilos = ({ title, description, children }: Props) => {
    const [open, setOpen] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Inputs>({
        defaultValues: {
            nombre: 'Silos'
        }
    })

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
                        <Label htmlFor='codigo'>Codigo</Label>
                        <Input
                            type='text'
                            autoComplete='off'
                            placeholder='Silo 1'
                            {...register('codigo', {
                                required: {
                                    value: true,
                                    message: 'El nombre es requerido'
                                }
                            })}
                        />
                        {errors.codigo != null && (
                            <span className='text-xs text-red-600'>
                                {errors.codigo.message}
                            </span>
                        )}
                    </div>
                    <div className='grid w-full max-w-sm items-center gap-1.5'>
                        <Label htmlFor='nombre'>Nombre</Label>
                        <Input
                            type='text'
                            autoComplete='off'
                            placeholder='Silo 1'
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
                        <Label htmlFor='capacity_total'>Capacidad Maxima</Label>
                        <Input
                            type='number'
                            autoComplete='off'
                            placeholder='0'
                            {...register('capacidad', {
                                required: {
                                    value: true,
                                    message: 'La capacidad es requerida'
                                }
                            })}
                        />
                        {errors.capacidad != null && (
                            <span className='text-xs text-red-600'>
                                {errors.capacidad.message}
                            </span>
                        )}
                    </div>
                    <div className='grid w-full max-w-sm items-center gap-1.5'>
                        <Label htmlFor='unidad'>Unidad de Medida</Label>
                        <Input
                            type='Text'
                            autoComplete='off'
                            placeholder='Unidad de Medida'
                            {...register('unidad', {
                                required: {
                                    value: true,
                                    message: 'Unidad de medida utilizada'
                                }
                            })}
                        />
                        {errors.unidad != null && (
                            <span className='text-xs text-red-600'>
                                {errors.unidad.message}
                            </span>
                        )}
                    </div>

                    <DialogFooter className=''>
                        <Button type='submit'>Guardar</Button>
                    </DialogFooter>
                </form>
            </DialogContent >
        </Dialog >
    )
}
