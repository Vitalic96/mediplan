import Image from 'next/image'
import Link from 'next/link'
import { Search } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Logo } from '@/components/logo'
import { InputWithIcon } from '@/components/input-with-icon'
import UserPhoto from '@/assets/images/user/avatar.jpg'

const Header = () => {
  return (
    <header className='flex min-h-[var(--header-height)] items-center border-b border-[#E9E9E9]/40 bg-white'>
      <div className='container flex items-center gap-4 px-0 py-5'>
        <Logo href='/' />
        <InputWithIcon
          Icon={Search}
          className='relative ml-auto max-w-[320px] grow'
        >
          <Input type='text' placeholder='Search' />
        </InputWithIcon>
        <Link
          href='/dashboard'
          className='flex w-full max-w-[200px] items-center justify-end gap-4 text-xs transition-colors hover:text-violet active:text-violet-600'
        >
          <span className='overflow-hidden text-ellipsis'>Mikhail Revenko</span>
          <Image
            className='rounded-full'
            src={UserPhoto}
            width={50}
            height={50}
            alt=''
          />
        </Link>
      </div>
    </header>
  )
}

export { Header }
