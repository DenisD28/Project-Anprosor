import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { useQuery } from '@tanstack/react-query'
import { FilaTablaGranos } from './FilaTablaGranos'
import { GetGranos } from '@/services/servicios.Granos'

export const TablaGranos = () => {
  const { data: listGranos } = useQuery({
    queryKey: ['grains'],
    queryFn: GetGranos
  })

  return (
    <Table className='table-auto'>
      <TableCaption>Lista de Granos registrados en el sistema</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Nombre del Grano</TableHead>
          <TableHead className='w-40 text-center'>Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {listGranos?.map((grain) => (
          <FilaTablaGranos key={grain.id} {...grain} />
        ))}
      </TableBody>
    </Table>
  )
}
