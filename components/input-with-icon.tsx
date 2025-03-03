import { ComponentType, forwardRef } from 'react'
import { LucideProps } from 'lucide-react'

import { cn } from '@/lib/utils'

export const InputWithIcon = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    Icon: ComponentType<{ className?: string } & LucideProps>
  }
>(({ Icon, children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn('relative', className)} {...props}>
      <Icon
        size={20}
        className='pointer-events-none absolute bottom-0 right-4 top-0 m-auto text-[#817474] xl:right-8'
      />
      {children}
    </div>
  )
})
