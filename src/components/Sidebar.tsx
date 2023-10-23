import {
  IconLayoutDashboard,
  IconUserCog,
  IconBuilding,
  IconUsers,
  IconLogout2
} from '@tabler/icons-react'

import { Link, Outlet } from 'react-router-dom'
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
        className='fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0'
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

          <ul className='space-y-2 font-medium grow'>
            <li>
              <Link
                to={'/dashboard'}
                className='flex items-center p-2  rounded-lg  group'
              >
                <IconLayoutDashboard />
                <span className='ml-3'>Panel De Control</span>
              </Link>
            </li>
            <li>
              <Link
                to={'/adminClientes'}
                className='flex items-center p-2  rounded-lg  group'
              >
                <IconUserCog />
                <span className='ml-3'>Admin. Clientes</span>
              </Link>
            </li>
            <li>
              <Link
                to={'/adminGranos'}
                className='flex items-center p-2  rounded-lg  group'
              >
                <img
                  src='/svg/corn-seeds-svgrepo-com.svg'
                  alt=''
                  className='w-6 h-6 '
                />

                <span className='ml-3'>Admin. Granos</span>
              </Link>
            </li>
            <li>
              <Link
                to={'/adminServicios'}
                className='flex items-center p-2  rounded-lg  group'
              >
                <img
                  src='/svg/services-svgrepo-com.svg'
                  alt=''
                  className='w-6 h-6 '
                />
                <span className='ml-3'>Admin. Servicios</span>
              </Link>
            </li>
            <li>
              <Link
                to={'/adminSilos'}
                className='flex items-center p-2  rounded-lg  group'
              >
                <IconBuilding />
                <span className='ml-3'>Admin. Silos</span>
              </Link>
            </li>
            <li>
              <Link
                to={'/adminUsuarios'}
                className='flex items-center p-2  rounded-lg  group'
              >
                <IconUsers />
                <span className='ml-3'>Admin. Usuarios</span>
              </Link>
            </li>
          </ul>

          <div className='flex justify-between'>
            <Link to={'/'} className='flex items-center p-2  rounded-lg  group'>
              <IconLogout2 />
            </Link>

            <Link to={'/'} className='flex items-center p-2  rounded-lg  group'>
              <IconUserCog />
            </Link>
          </div>
        </div>
      </aside>
      <div className='p-4 sm:ml-64'>
        <Outlet />
      </div>
    </>
  )
}
