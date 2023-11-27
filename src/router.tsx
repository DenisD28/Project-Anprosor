import loadable from '@loadable/component'
import { Sidebar } from '@/components/Sidebar'
import { Login } from '@/pages/public/Login/Login'
import { createBrowserRouter } from 'react-router-dom'

const Dashboard = loadable(
  async () => await import('./pages/private/Dashboard/Dashboard')
)
const AdminSilos = loadable(
  async () => await import('@/pages/private/Admin-Silos/AdminSilos')
)
const AdminGranos = loadable(
  async () => await import('@/pages/private/Admin-Granos/AdminGranos')
)
const AdminClientes = loadable(
  async () => await import('@/pages/private/Admin-Clientes/AdminClientes')
)
const AdminUsuarios = loadable(
  async () => await import('@/pages/private/Admin-Usuarios/AdminUsuarios')
)
const AdminServicios = loadable(
  async () => await import('@/pages/private/Admin-Servicios/AdminServicios')
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
