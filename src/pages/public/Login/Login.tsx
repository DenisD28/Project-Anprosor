import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/components/ui/use-toast'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { AuthLogin } from '@/services/servicios.Autenticacion'

interface FormInput {
  email: string
  password: string
}
export const Login = () => {
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInput>({
    defaultValues: {
      email: 'example@test.com',
      password: 'password'
    }
  })

  const onSubmit: SubmitHandler<FormInput> = ({ email, password }) => {
    AuthLogin(email, password)
      .then((user) => {
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

  return (
    <div className='w-screen h-screen flex justify-end items-center'>
      <section className='flex flex-col justify-center items-center gap-12 border w-1/4 h-3/4 p-4 rounded-lg shrink-0 mr-20 shadow-xl bg-card'>
        <div className='flex flex-col justify-center items-center gap-1.5'>
          <h1 className='font-bold text-2xl'>Login</h1>
          <p className='font-medium text-sm'>Hola Bienvenido De Nuevo</p>
        </div>

        <form
          onSubmit={(evente) => {
            void handleSubmit(onSubmit)(evente)
          }}
          className='w-full flex flex-col justify-between items-center gap-5'
        >
          <div className='grid w-full items-center gap-2'>
            <Label htmlFor='username'>Nombre de Usuario</Label>
            <Input
              id='username'
              type='text'
              placeholder='Nombre de Usuario'
              {...register('email', {
                required: {
                  value: true,
                  message: 'El nombre de usuario es requerido'
                }
              })}
            />
            {errors.email != null && (
              <span className='text-xs text-red-600'>
                {errors.email.message}
              </span>
            )}
          </div>

          <div className='grid w-full items-center gap-2'>
            <Label htmlFor='password'>Contraseña</Label>
            <Input
              id='password'
              type='password'
              placeholder='Contraseña'
              {...register('password', {
                required: {
                  value: true,
                  message: 'La contraseña es requerida'
                }
              })}
            />
            {errors.password != null && (
              <span className='text-xs text-red-600'>
                {errors.password.message}
              </span>
            )}
          </div>

          <Button type='submit' className='w-1/2 mt-4'>
            Iniciar Sesion
          </Button>
        </form>
      </section>

      <Toaster />
    </div>
  )
}
