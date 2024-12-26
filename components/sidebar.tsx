'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { menuList } from '@/constants'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/logo'

const Sidebar = ({
  className,
  isOpen,
}: {
  className?: string
  isOpen?: boolean
}) => {
  const pathname = usePathname()

  return (
    <>
      <aside
        className={cn(
          'fixed bottom-0 left-0 right-0 top-[var(--mobile-header-height)] z-50 shrink-0 bg-white py-3 transition-[visibility,opacity] duration-300 lg:visible lg:relative lg:top-0 lg:w-[180px] lg:py-12 lg:opacity-100 lg:shadow-[-10000px_0_0_10000px_#fff] xl:w-[200px]',
          className,
          isOpen ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      >
        <div className='container flex flex-col gap-6 lg:px-0'>
          <Logo className='-ml-2 hidden lg:flex' href='/' />
          <ul className='flex grow flex-col'>
            {menuList.map(({ position, label, href, Icon }, i) => {
              const isActivePage = href === pathname || href === pathname + '/'

              return (
                <li
                  key={i}
                  className={position === 'top' ? 'order-1' : 'order-2'}
                >
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
        </div>
      </aside>
    </>
  )
}

export { Sidebar }
