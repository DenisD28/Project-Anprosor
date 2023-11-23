import { Pie } from 'react-chartjs-2'
import { Button } from '@/components/ui/button'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export const data = {
  labels: ['Disponible', 'Ocupado'],
  datasets: [
    {
      label: 'Porcentaje de espacio',
      data: [12, 19],
      backgroundColor: ['rgba(15, 23, 42, 0.75)', 'rgba(54, 162, 235, .75)'],
      borderColor: ['rgba(15, 23, 42, 1)', 'rgba(54, 162, 235, 1)'],
      borderWidth: 2
    }
  ]
}

export default function Dashboard() {
  return (
    <main className='flex flex-col gap-4'>
      <header className='text-3xl font-bold'>Panel De control</header>

      <section className='grid grid-cols-4 p-2 gap-4 overflow-y-scroll'>
        <figure className='w-64 flex flex-col gap-2.5 items-center shadow-lg rounded-lg p-2'>
          <header className='font-bold text-lg'>Silo Nro: 1</header>
          <Pie data={data} />
          <footer>
            <Button>Detalles del silo</Button>
          </footer>
        </figure>
      </section>
    </main>
  )
}
