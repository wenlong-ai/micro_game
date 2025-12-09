import React from 'react'
import { cn } from '../../lib/utils'

const baseClasses =
  'inline-flex items-center justify-center rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed'

const variants = {
  default: 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5',
  outline: 'border border-slate-200 bg-white text-slate-900 hover:-translate-y-0.5 hover:shadow-card',
  ghost: 'text-slate-700 hover:bg-slate-100',
}

const sizes = {
  sm: 'h-9 px-4',
  md: 'h-11 px-5',
  lg: 'h-12 px-6 text-base',
}

export const Button = React.forwardRef(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'
