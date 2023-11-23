import loadable from '@loadable/component'
import { Sidebar } from '@/components/Sidebar'
import { Login } from '@/pages/public/Login/Login'
import { createBrowserRouter } from 'react-router-dom'

const Dashboard = loadable(
  async () => await import('./pages/private/Dashboard/Dashboard'),
  { fallback: <div>Loading...</div> }
)
const AdminSilos = loadable(
  async () => await import('@/pages/private/Admin-Silos/AdminSilos'),
  { fallback: <div>Loading...</div> }
)
const AdminGranos = loadable(
  async () => await import('@/pages/private/Admin-Granos/AdminGranos'),
  { fallback: <div>Loading...</div> }
)
const AdminClientes = loadable(
  async () => await import('@/pages/private/Admin-Clientes/AdminClientes'),
  { fallback: <div>Loading...</div> }
)
const AdminUsuarios = loadable(
  async () => await import('@/pages/private/Admin-Usuarios/AdminUsuarios'),
  { fallback: <div>Loading...</div> }
)
const AdminServicios = loadable(
  async () => await import('@/pages/private/Admin-Servicios/AdminServicios'),
  { fallback: <div>Loading...</div> }
)

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '',
    element: <Sidebar />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/adminClientes',
        element: <AdminClientes />
      },

      {
        path: '/adminGranos',
        element: <AdminGranos />
      },
      {
        path: '/adminServicios',
        element: <AdminServicios />
      },
      {
        path: '/adminSilos',
        element: <AdminSilos />
      },
      {
        path: '/adminUsuarios',
        element: <AdminUsuarios />
      }
    ]
  }
])
