import {
  IconLayoutDashboard,
  IconUserCog,
  IconBuilding,
  IconUsers,
  IconLogout2
} from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { NavLink, Outlet } from 'react-router-dom'
export const Sidebar = () => {
  return (
    <>
      <button
        type='button'
        aria-controls='logo-sidebar'
        className='inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
      >
        <span className='sr-only'>Open sidebar</span>
        <svg
          className='w-6 h-6'
          aria-hidden='true'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            clipRule='evenodd'
            fillRule='evenodd'
            d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
          ></path>
        </svg>
      </button>
      <aside
        id='logo-sidebar'
        className='fixed top-0 left-0 z-40 w-60 h-screen transition-transform -translate-x-full sm:translate-x-0'
        aria-label='Sidebar'
      >
        <div className='h-full px-3 py-4 overflow-y-auto bg-primary text-primary-foreground flex flex-col justify-between'>
          <header className='flex items-center gap-4 mb-5'>
            <figure className='w-12 h-12'>
              <img
                src='public/img/anprosor.jpeg'
                className='w-full h-full object-cover object-center rounded-full'
                alt='Flowbite Logo'
              />
            </figure>
            <span className='grow text-2xl font-bold whitespace-nowrap'>
              ANPROSOR
            </span>
          </header>

          <nav className='space-y-2 font-medium grow'>
            <NavLink to='/dashboard' className='flex gap-2.5 p-2'>
              <IconLayoutDashboard />
              <span>Panel De Control</span>
            </NavLink>

            <NavLink to={'/adminClientes'} className='flex gap-2.5 p-2'>
              <IconUserCog />
              <span>Admin. Clientes</span>
            </NavLink>

            <NavLink to={'/adminGranos'} className='flex gap-2.5 p-2'>
              <img
                src='/svg/corn-seeds-svgrepo-com.svg'
                alt=''
                className='w-6 h-6 '
              />
              <span>Admin. Granos</span>
            </NavLink>

            <NavLink to={'/adminServicios'} className='flex gap-2.5 p-2'>
              <img
                src='/svg/services-svgrepo-com.svg'
                alt=''
                className='w-6 h-6 '
              />
              <span>Admin. Servicios</span>
            </NavLink>

            <NavLink to={'/adminSilos'} className='flex gap-2.5 p-2'>
              <IconBuilding />
              <span>Admin. Silos</span>
            </NavLink>

            <NavLink to={'/adminUsuarios'} className='flex gap-2.5 p-2'>
              <IconUsers />
              <span>Admin. Usuarios</span>
            </NavLink>
          </nav>

          <div className='flex justify-between'>
            <NavLink
              to={'/'}
              className='flex items-center p-2  rounded-lg  group'
            >
              <IconLogout2 />
            </NavLink>

            <NavLink
              to={'/'}
              className='flex items-center p-2  rounded-lg  group'
            >
              <IconUserCog />
            </NavLink>
          </div>
        </div>
      </aside>
      <div className='p-4 sm:ml-60'>
        <Outlet />
      </div>
    </>
  )
}
