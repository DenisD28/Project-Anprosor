import { useState } from 'react'
import { type ActionForm, type Client } from '@/type'
import { useToast } from '@/components/ui/use-toast'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import {
  CreacteCliente,
  DeleteCliente,
  UpdateCliente
} from '@/services/servicios.Clientes'

export const useFormClientes = (action?: ActionForm, infoCliente?: Client) => {
  const [openModal, setOpenModal] = useState(false)

  const { toast } = useToast()
  const queryClient = useQueryClient()

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Client>({
    defaultValues: {
      id: infoCliente?.id ?? 0,
      name: infoCliente?.name ?? '',
      phone: infoCliente?.phone ?? '',
      email: infoCliente?.email ?? ''
    }
  })

  const newClient = useMutation({
    mutationFn: CreacteCliente,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['clients'] })
      setOpenModal(false)

      toast({
        title: 'Nuevo Cliente',
        description: 'Cliente agregado exitosamente'
      })

      reset()
    },
    onError: () => {
      toast({
        title: 'Error',
        variant: 'destructive',
        description: 'Error al ingresar nuevo cliente'
      })
    }
  })

  const editClient = useMutation({
    mutationFn: UpdateCliente,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['clients'] })
      setOpenModal(false)
      toast({
        title: 'Actualizar informacion',
        description: 'Informacion del cliente actualizada'
      })
    },
    onError: (error) => {
      toast({
        title: 'Error',
        variant: 'destructive',
        description: 'Error al actualizar informacion del cliente'
      })

      console.log(error)
    }
  })

  const deleteClient = useMutation({
    mutationFn: DeleteCliente,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['clients'] })

      toast({
        title: 'Eliminar Cliente',
        description: 'Cliente Eliminado exitosamente'
      })
    },
    onError: () => {
      toast({
        title: 'Error',
        variant: 'destructive',
        description: 'Error al Eliminar el cliente'
      })
    }
  })

  const handleDeleteClient = (id: number) => () => {
    deleteClient.mutate(id)
  }

  const onSubmit: SubmitHandler<Client> = (data) => {
    switch (action) {
      case 'create':
        newClient.mutate(data)
        break

      case 'update':
        editClient.mutate(data)
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
    handleDeleteClient
  }
}
