import { ComponentType, forwardRef } from 'react'
import { LucideProps } from 'lucide-react'

import { cn } from '@/lib/utils'

export const InputWithIcon = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    Icon: ComponentType<{ className?: string } & LucideProps>
  }
>(({ Icon, children, className, ...props }) => {
  return (
    <div className={cn('relative', className)} {...props}>
      <Icon
        size={20}
        className='pointer-events-none absolute bottom-0 right-8 top-0 m-auto text-[#817474]'
      />
      {children}
    </div>
  )
})
