import Image from 'next/image'
import Link, { LinkProps } from 'next/link'
import { AnchorHTMLAttributes, forwardRef } from 'react'

import { cn } from '@/lib/utils'

const Logo = forwardRef<
  HTMLAnchorElement,
  AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps
>(({ className, ...props }, ref) => {
  return (
    <Link
      ref={ref}
      className={cn('flex items-center gap-2', className)}
      {...props}
    >
      <Image
        src={'/images/logo.png'}
        width={40}
        height={40}
        className='h-[50px] w-[50px] lg:h-10 lg:w-10'
        alt=''
      />
      <div className='hidden text-xl font-semibold lg:block'>MediPlan</div>
    </Link>
  )
})

export { Logo }
