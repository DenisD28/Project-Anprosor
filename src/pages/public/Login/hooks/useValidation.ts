import { type ILogin } from '@/type'
import { useNavigate } from 'react-router-dom'
import { toast } from '@/components/ui/use-toast'
import { AuthLogin } from '@/services/servicios.Autenticacion'
import { useForm, type SubmitHandler } from 'react-hook-form'

export const useValidation = () => {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ILogin>({
    defaultValues: {
      email: 'example@test.com',
      password: 'password'
    }
  })

  const onSubmit: SubmitHandler<ILogin> = (data) => {
    AuthLogin(data)
      .then((user) => {
        navigate('/dashboard')

        toast({
          title: 'Bienvenido',
          description: `Bienvenido de vuelta ${user}`
        })
      })
      .catch((error) => {
        toast({
          title: 'Error',
          variant: 'destructive',
          description: error.response.data.message
        })
      })
  }
  return { register, handleSubmit, onSubmit, errors }
}
