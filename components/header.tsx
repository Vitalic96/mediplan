'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, Search, X } from 'lucide-react'

import { Logo } from '@/components/logo'
import { InputWithIcon } from '@/components/input-with-icon'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Sidebar } from '@/components/sidebar'
import { cn } from '@/lib/utils'
import UserPhoto from '@/assets/images/user/avatar.jpg'

const Header = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen((p) => !p)
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
              'animate-fadein shrink-0 lg:hidden',
              isOpen && 'hidden',
            )}
          />
          <Link
            href='/dashboard'
            className={cn(
              'animate-fadein flex shrink-0 items-center justify-end gap-4 text-xs transition-colors hover:text-violet active:text-violet-600 lg:order-4 lg:flex lg:basis-48',
              !isOpen && 'hidden',
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
          <InputWithIcon
            Icon={Search}
            className='relative ml-auto hidden max-w-[320px] grow lg:block'
          >
            <Input type='text' placeholder='Search' className='bg-white' />
          </InputWithIcon>
          <Button variant='gray' size='icon' className='ml-auto lg:hidden'>
            <Search size={20} />
          </Button>
          <Button
            variant='gray'
            size='icon'
            className='lg:hidden'
            onClick={handleOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </header>
      <div className='h-[var(--mobile-header-height)] lg:hidden lg:h-[var(--header-height)]'></div>
      <Sidebar isOpen={isOpen} className='lg:hidden' />
    </>
  )
}

export { Header }
