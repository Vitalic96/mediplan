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
      <Image src={'/images/logo.png'} width={40} height={40} alt='' />
      <div className='text-xl font-semibold'>MediPlan</div>
    </Link>
  )
})

export { Logo }
