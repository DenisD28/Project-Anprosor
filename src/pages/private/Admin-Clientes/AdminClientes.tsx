import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { IconEditCircle, IconTrash } from '@tabler/icons-react'

export const AdminClientes = () => {
  return (
    <section className='flex flex-col gap-4'>
      <header className='text-3xl font-bold'>Clientes registrados</header>

      <Dialog>
        <DialogTrigger asChild>
          <Button className='self-end w-32'>Nuevo Cliente</Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Agregar Nuevo Cliente</DialogTitle>
            <DialogDescription>
              Ingrese los datos del nuevo cliente
            </DialogDescription>
          </DialogHeader>
          <form action='' className='space-y-4'>
            <div className='grid w-full max-w-sm items-center gap-1.5'>
              <Label htmlFor='email'>Nombre</Label>
              <Input />
            </div>
            <div className='grid w-full max-w-sm items-center gap-1.5'>
              <Label htmlFor='email'>Correo</Label>
              <Input />
            </div>
            <div className='grid w-full max-w-sm items-center gap-1.5'>
              <Label htmlFor='email'>Correo</Label>
              <Input />
            </div>
          </form>
          <DialogFooter>
            <Button type='submit'>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <main>
        <Table>
          <TableCaption>
            Lista de clientes registrados en el sistema
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Nombre del cliente</TableHead>
              <TableHead>Numero del telefono</TableHead>
              <TableHead>Correo electronico</TableHead>
              <TableHead className='text-center'>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <RowTablerClient />
          </TableBody>
        </Table>
      </main>
    </section>
  )
}

export const RowTablerClient = () => {
  return (
    <TableRow>
      <TableCell>Axel David Picado</TableCell>
      <TableCell>+000 1234-5678</TableCell>
      <TableCell>test@gamil.com</TableCell>
      <TableCell className='flex justify-center gap-2.5'>
        <Button variant={'secondary'} size={'icon'}>
          <IconEditCircle />
        </Button>
        <Button variant={'destructive'} size={'icon'}>
          <IconTrash />
        </Button>
      </TableCell>
    </TableRow>
  )
}
