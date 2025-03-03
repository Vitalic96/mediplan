import * as React from 'react'

import { cn } from '@/lib/utils'

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<'textarea'>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'flex min-h-[60px] w-full rounded-2xl rounded-br-none rounded-tl-none border border-[#817474]/20 bg-transparent p-3 text-base shadow-sm placeholder:text-gray-800/20 focus-visible:border-neutral-950 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 sm:p-5',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = 'Textarea'

export { Textarea }
