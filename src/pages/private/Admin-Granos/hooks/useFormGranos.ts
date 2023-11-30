import {
  CreacteGrano,
  UpdateGrano,
  DeleteGrano
} from '@/services/servicios.Granos'
import { useState } from 'react'
import { type ActionForm, type Grain } from '@/type'
import { useToast } from '@/components/ui/use-toast'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useQueryClient, useMutation } from '@tanstack/react-query'

export const useFormGranos = (action?: ActionForm, infoGrain?: Grain) => {
  const [openModal, setOpenModal] = useState(false)

  const { toast } = useToast()
  const queryClient = useQueryClient()

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Grain>({
    defaultValues: {
      id: infoGrain?.id ?? 0,
      code: infoGrain?.code ?? '',
      name: infoGrain?.name ?? ''
    }
  })

  const newGrain = useMutation({
    mutationFn: CreacteGrano,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['grains'] })
      setOpenModal(false)

      toast({
        title: 'Nuevo Grano',
        description: 'Grano agregado exitosamente'
      })

      reset()
    },
    onError: () => {
      toast({
        title: 'Error',
        variant: 'destructive',
        description: 'Error al ingresar nuevo grano'
      })
    }
  })

  const updateGrain = useMutation({
    mutationFn: UpdateGrano,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['grains'] })
      setOpenModal(false)
      toast({
        title: 'Actualizar informacion',
        description: 'Informacion del grano actualizada'
      })
    },
    onError: () => {
      toast({
        title: 'Error',
        variant: 'destructive',
        description: 'Error al actualizar informacion del grano'
      })
    }
  })

  const deleteGrain = useMutation({
    mutationFn: DeleteGrano,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['grains'] })

      toast({
        title: 'Eliminar Grano',
        description: 'Grano eliminado exitosamente'
      })
    },
    onError: () => {
      toast({
        title: 'Error',
        variant: 'destructive',
        description: 'Error al eliminar el grano'
      })
    }
  })

  const handleDeleteGrain = (id: number) => () => {
    deleteGrain.mutate(id)
  }

  const onSubmit: SubmitHandler<Grain> = (data) => {
    switch (action) {
      case 'create':
        newGrain.mutate(data)
        break

      case 'update':
        updateGrain.mutate(data)
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
    handleDeleteGrain
  }
}
