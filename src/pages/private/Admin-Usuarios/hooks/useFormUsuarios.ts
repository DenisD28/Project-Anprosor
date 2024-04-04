import {
    CreateUsuarios,
    UpdateUsuarios
} from '@/services/servicios.Usuarios'
import { useState } from 'react'
import { type ActionForm, type Usuario } from '@/type'
import { useToast } from '@/components/ui/use-toast'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useQueryClient, useMutation } from '@tanstack/react-query'

export const useFormSilos = (action?: ActionForm, infoUsuario?: Usuario) => {
    const [openModal, setOpenModal] = useState(false)

    const { toast } = useToast()
    const queryClient = useQueryClient()

    const {
        reset,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Usuario>({
        defaultValues: {
            user_id: infoUsuario?.user_id ?? 0,
            name: infoUsuario?.name ?? '',
            email: infoUsuario?.email ?? '',
            role_id: infoUsuario?.role_id ?? 0
        }
    })

    const newSilo = useMutation({
        mutationFn: CreateUsuarios,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['user'] })
            setOpenModal(false)

            toast({
                title: 'Nuevo Usuario',
                description: 'Usuario agregado exitosamente'
            })

            reset()
        },
        onError: () => {
            toast({
                title: 'Error',
                variant: 'destructive',
                description: 'Error al ingresar nuevo usuario'
            })
        }
    })

    const updateSilo = useMutation({
        mutationFn: UpdateUsuarios,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['user'] })
            setOpenModal(false)
            toast({
                title: 'Actualizar informacion',
                description: 'Informacion del usuario actualizada'
            })
        },
        onError: () => {
            toast({
                title: 'Error',
                variant: 'destructive',
                description: 'Error al actualizar informacion del user'
            })
        }
    })

    const onSubmit: SubmitHandler<Usuario> = (data) => {
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
    }
}
