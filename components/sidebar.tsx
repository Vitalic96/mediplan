'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { menuList } from '@/constants'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/logo'

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <aside className='relative flex w-[200px] shrink-0 flex-col gap-6 bg-white py-12 shadow-[-10000px_0_0_10000px_#fff]'>
      <Logo className='-ml-2' href='/' />
      <ul className='flex grow flex-col'>
        {menuList.map(({ position, label, href, Icon }, i) => {
          const isActivePage = href === pathname || href === pathname + '/'

          return (
            <li key={i} className={position === 'top' ? 'order-1' : 'order-2'}>
              <Link
                href={href}
                className={cn(
                  'group relative flex items-center gap-3 py-6 text-[15px] font-light text-gray-700 duration-300 before:absolute before:bottom-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-[1px] before:bg-violet before:opacity-0 before:transition-all before:duration-500 hover:text-violet hover:before:h-[23px] hover:before:opacity-100',
                  isActivePage && 'font-normal text-violet',
                )}
              >
                <Icon className='shrink-0' />
                <span className='text-gray-900 transition-colors duration-300 group-hover:text-violet'>
                  {label}
                </span>
              </Link>
            </li>
          )
        })}
        <li className='order-1 !mb-auto hidden xl:block'></li>
      </ul>
    </aside>
  )
}

export { Sidebar }
