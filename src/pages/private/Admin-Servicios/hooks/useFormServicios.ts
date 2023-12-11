import { type ActionForm, type Service } from '@/type'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import {
  CreactServicio,
  UpdatServicio,
  DeleteServicio
} from '@/services/servicios.Servicios'
import { useToast } from '@/components/ui/use-toast'

export const useFormServicios = (
  action?: ActionForm,
  infoService?: Service
) => {
  const [openModal, setOpenModal] = useState(false)

  const { toast } = useToast()
  const queryClient = useQueryClient()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Service>({
    defaultValues: {
      id: infoService?.id ?? 0,
      name: infoService?.name ?? '',
      description: infoService?.description ?? ''
    }
  })

  const newService = useMutation({
    mutationFn: CreactServicio,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['services'] })
      setOpenModal(false)
      toast({
        title: 'Nuevo Servicio',
        description: 'Servicio agregado exitosamente'
      })
    },
    onError: () => {
      toast({
        title: 'Error',
        variant: 'destructive',
        description: 'Error al ingresar nuevo servicio'
      })
    }
  })

  const editService = useMutation({
    mutationFn: UpdatServicio,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['services'] })
      setOpenModal(false)
      toast({
        title: 'Actualizar informacion',
        description: 'Informacion del servicio actualizada'
      })
    },
    onError: (error) => {
      toast({
        title: 'Error',
        variant: 'destructive',
        description: 'Error al actualizar informacion del servicio'
      })

      console.log(error)
    }
  })

  const deleteService = useMutation({
    mutationFn: DeleteServicio,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['services'] })

      toast({
        title: 'Eliminar Servicio',
        description: 'Servicio Eliminado exitosamente'
      })
    },
    onError: () => {
      toast({
        title: 'Error',
        variant: 'destructive',
        description: 'Error al Eliminar el servicio'
      })
    }
  })

  const handleDeleteService = (id: number) => () => {
    deleteService.mutate(id)
  }

  const onSubmit: SubmitHandler<Service> = (data) => {
    switch (action) {
      case 'create':
        newService.mutate(data)
        break

      case 'update':
        editService.mutate(data)
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
    handleDeleteService
  }
}
