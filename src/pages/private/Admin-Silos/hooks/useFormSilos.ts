import {
    CreateSilo,
    UpdateSilo,
    DeleteSilo
} from '@/services/servicios.Silos'
import { useState } from 'react'
import { type ActionForm, type Silo } from '@/type'
import { useToast } from '@/components/ui/use-toast'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useQueryClient, useMutation } from '@tanstack/react-query'

export const useFormSilos = (action?: ActionForm, infoSilo?: Silo) => {
    const [openModal, setOpenModal] = useState(false)

    const { toast } = useToast()
    const queryClient = useQueryClient()

    const {
        reset,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Silo>({
        defaultValues: {
            code: infoSilo?.code ?? '',
            name: infoSilo?.name ?? '',
            capacity_total: infoSilo?.capacity_total ?? '',
            unit_of_measure: infoSilo?.unit_of_measure ?? ''
        }
    })

    const newSilo = useMutation({
        mutationFn: CreateSilo,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['silo'] })
            setOpenModal(false)

            toast({
                title: 'Nuevo Silo',
                description: 'Silo agregado exitosamente'
            })

            reset()
        },
        onError: () => {
            toast({
                title: 'Error',
                variant: 'destructive',
                description: 'Error al ingresar nuevo silo'
            })
        }
    })

    const updateSilo = useMutation({
        mutationFn: UpdateSilo,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['silo'] })
            setOpenModal(false)
            toast({
                title: 'Actualizar informacion',
                description: 'Informacion del silo actualizada'
            })
        },
        onError: () => {
            toast({
                title: 'Error',
                variant: 'destructive',
                description: 'Error al actualizar informacion del silo'
            })
        }
    })

    const deleteSilo = useMutation({
        mutationFn: DeleteSilo,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['silo'] })

            toast({
                title: 'Eliminar Silo',
                description: 'Silo eliminado exitosamente'
            })
        },
        onError: (error) => {
            toast({
                title: 'Error',
                variant: 'destructive',
                description: 'Error al eliminar el silo'
            })

            console.log(error)
        }
    })

    const handleDeleteSilo = (id: number) => () => {
        deleteSilo.mutate(id)
    }

    const onSubmit: SubmitHandler<Silo> = (data) => {
        switch (action) {
            case 'create':
                newSilo.mutate(data)
                break

            case 'update':
                updateSilo.mutate(data)
                break

            default:
                break
        }
    }
    return {
        errors,
        openModal,
        register,
        onSubmit,
        handleSubmit,
        setOpenModal,
        handleDeleteSilo
    }
}
