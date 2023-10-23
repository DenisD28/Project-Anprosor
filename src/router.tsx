import { Sidebar } from '@/components/Sidebar'
import { Login } from '@/pages/public/Login/Login'
import { createBrowserRouter } from 'react-router-dom'
import { Dashboard } from '@/pages/private/Dashboard/Dashboard'
import { AdminSilos } from '@/pages/private/Admin-Silos/AdminSilos'
import { AdminGranos } from '@/pages/private/Admin-Granos/AdminGranos'
import { AdminClientes } from '@/pages/private/Admin-Clientes/AdminClientes'
import { AdminUsuarios } from '@/pages/private/Admin-Usuarios/AdminUsuarios'
import { AdminServicios } from '@/pages/private/Admin-Servicios/AdminServicios'

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
