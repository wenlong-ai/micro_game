import React, { createContext, useContext, useState } from 'react'
import { cn } from '../../lib/utils'

const TabsContext = createContext()

export function Tabs({ defaultValue, children, className }) {
  const [value, setValue] = useState(defaultValue)
  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={cn('w-full', className)}>{children}</div>
    </TabsContext.Provider>
  )
}

export function TabsList({ className, ...props }) {
  return <div className={cn('inline-flex items-center gap-2 rounded-full bg-slate-100 p-2', className)} {...props} />
}

export function TabsTrigger({ value, children, className, ...props }) {
  const { value: active, setValue } = useContext(TabsContext)
  const isActive = active === value
  return (
    <button
      onClick={() => setValue(value)}
      className={cn(
        'min-w-[140px] rounded-full px-4 py-2 text-sm font-semibold transition-all',
        isActive ? 'bg-white shadow-md text-slate-900' : 'text-slate-600 hover:text-slate-900',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export function TabsContent({ value, children, className, ...props }) {
  const { value: active } = useContext(TabsContext)
  if (active !== value) return null
  return (
    <div className={cn('mt-6', className)} {...props}>
      {children}
    </div>
  )
}
