import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CiSearch } from 'react-icons/ci'

import { Input } from '@/components/ui/input'
import UserPhoto from '@/assets/images/user/avatar.jpg'

const Header = () => {
  return (
    <header className='flex items-center justify-end gap-10 py-8'>
      <div className='relative max-w-[320px] grow'>
        <Input type='email' id='email' placeholder='Email' />
        <CiSearch
          size={17}
          className='pointer-events-none absolute bottom-0 right-8 top-0 m-auto'
        />
      </div>
      <Link
        href='/'
        className='hover:text-violet flex items-center gap-4 text-sm transition-colors'
      >
        <span>Mikhail Revenko</span>
        <Image
          className='rounded-full'
          src={UserPhoto}
          width={50}
          height={50}
          alt=''
        />
      </Link>
    </header>
  )
}

export default Header
