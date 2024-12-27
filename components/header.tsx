'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, Search, X } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Logo } from '@/components/logo'
import { InputWithIcon } from '@/components/input-with-icon'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Sidebar } from '@/components/sidebar'
import UserPhoto from '@/assets/images/user/avatar.jpg'

const Header = ({ className }: { className?: string }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isOpenSearch, setIsOpenSearch] = useState(false)

  const handleOpenMenu = () => {
    setIsOpenSearch(false)
    setIsOpenMenu((p) => !p)
  }

  const handleOpenSearch = () => {
    setIsOpenMenu(false)
    setIsOpenSearch((p) => !p)
  }

  return (
    <>
      <header
        className={cn(
          'fixed left-0 right-0 top-0 z-50 flex min-h-[var(--mobile-header-height)] items-center border-b border-[#E9E9E9]/40 bg-white lg:relative lg:min-h-[var(--header-height)] lg:bg-transparent',
          className,
        )}
      >
        <div className='h-[var(--mobile-header-height)] lg:h-[var(--header-height)]'></div>
        <div className='container flex items-center gap-4 py-2 lg:px-0'>
          <Logo
            href='/'
            className={cn(
              'shrink-0 animate-fadein lg:hidden',
              isOpenMenu && 'hidden',
            )}
          />
          <Link
            href='/dashboard'
            className={cn(
              'flex shrink-0 animate-fadein items-center justify-end gap-4 text-xs transition-colors hover:text-violet active:text-violet-600 lg:order-4 lg:flex lg:basis-48',
              !isOpenMenu && 'hidden',
            )}
          >
            <Image
              className='rounded-full'
              src={UserPhoto}
              width={50}
              height={50}
              alt=''
            />
            <span className='overflow-hidden text-ellipsis lg:-order-1'>
              Mikhail Revenko
            </span>
          </Link>
          <div
            className={cn(
              'fixed left-0 right-0 top-[var(--mobile-header-height)] z-50 mx-auto grow bg-white transition-[visibility,opacity] duration-300 lg:visible lg:relative lg:top-0 lg:ml-auto lg:mr-0 lg:max-w-[320px] lg:bg-transparent lg:opacity-100',
              isOpenSearch ? 'visible opacity-100' : 'invisible opacity-0',
            )}
          >
            <InputWithIcon
              Icon={Search}
              className='mx-auto w-full max-w-[280px] py-4 2xs:max-w-[320px]'
            >
              <Input type='text' placeholder='Search' className='lg:bg-white' />
            </InputWithIcon>
          </div>
          <Button
            variant='gray'
            size='icon'
            className='ml-auto lg:hidden'
            onClick={handleOpenSearch}
          >
            <Search size={20} />
          </Button>
          <Button
            variant='gray'
            size='icon'
            className='lg:hidden'
            onClick={handleOpenMenu}
          >
            {isOpenMenu ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </header>
      <div className='h-[var(--mobile-header-height)] lg:hidden lg:h-[var(--header-height)]'></div>
      <Sidebar isOpen={isOpenMenu} className='lg:hidden' />
    </>
  )
}

export { Header }
