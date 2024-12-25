import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-lg font-normal transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary:
          'bg-violet-400 text-white shadow hover:bg-violet-500 active:bg-violet-600',
        destructive: 'bg-red-500 text-neutral-50 shadow-sm hover:bg-red-500/90',
        outline:
          'border border-neutral-200 bg-white shadow-sm hover:bg-neutral-100 hover:text-neutral-900',
        secondary:
          'bg-neutral-100 text-neutral-900 shadow-sm hover:bg-neutral-100/80',
        ghost: 'hover:bg-neutral-100 hover:text-neutral-900',
        gray: 'bg-gray-300/20 text-gray-400 hover:bg-gray-300/30 hover:bg-gray-300/40',
        link: 'text-normal p-0 text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50',
      },
      size: {
        sm: 'h-[30px]',
        md: 'h-10',
        lg: 'h-[50px]',
        icon: 'h-10 w-10 p-1',
        smIcon: 'h-[30px] w-[30px] p-1',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'lg',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
