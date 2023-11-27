import { useState } from 'react'
import { type Client } from '@/type'
import { useToast } from '@/components/ui/use-toast'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import {
  CreacteCliente,
  DeleteCliente,
  UpdateCliente
} from '@/services/servicios.Clientes'

export const useFormClientes = (action?: string, infoCliente?: Client) => {
  const [openModal, setOpenModal] = useState(false)

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

  const { toast } = useToast()
  const queryClient = useQueryClient()

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
    onError: () => {
      toast({
        title: 'Error',
        variant: 'destructive',
        description: 'Error al actualizar informacion del cliente'
      })
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
    if (action === 'create') {
      newClient.mutate(data)
    }

    if (action === 'edit') {
      editClient.mutate(data)
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
