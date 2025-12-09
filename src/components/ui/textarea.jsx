import React from 'react'
import { cn } from '../../lib/utils'

export const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400',
        className,
      )}
      {...props}
    />
  )
})

Textarea.displayName = 'Textarea'
