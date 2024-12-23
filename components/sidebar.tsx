import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { menuList } from '@/constants'

const Sidebar = () => {
  return (
    <div className='relative flex w-[200px] flex-col gap-10 bg-white py-10 shadow-[-10000px_0_0_10000px_#fff]'>
      <div className='flex items-center gap-2'>
        <Image src={'/images/logo.png'} width={40} height={40} alt='' />
        <div className='text-xl font-semibold'>MediPlan</div>
      </div>
      <ul className='flex grow flex-col gap-2'>
        {menuList.map(({ position, label, href, Icon }, i) => {
          return (
            <li key={i} className={position === 'top' ? 'order-1' : 'order-2'}>
              <Link
                href={href}
                className='before:bg-violet hover:text-violet relative flex items-center gap-2 py-4 text-[15px] text-gray-700 before:absolute before:bottom-0 before:right-0 before:top-0 before:m-auto before:h-[23px] before:w-[1px] before:opacity-0'
              >
                <Icon />
                {label}
              </Link>
            </li>
          )
        })}
        <li className='order-1 !mb-auto hidden xl:block'></li>
      </ul>
    </div>
  )
}

export default Sidebar
