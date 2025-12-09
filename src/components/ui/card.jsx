import React from 'react'
import { cn } from '../../lib/utils'

export function Card({ className, ...props }) {
  return <div className={cn('card-surface p-6', className)} {...props} />
}

export function CardHeader({ className, ...props }) {
  return <div className={cn('mb-4', className)} {...props} />
}

export function CardTitle({ className, ...props }) {
  return <h3 className={cn('text-xl font-semibold text-slate-900', className)} {...props} />
}

export function CardDescription({ className, ...props }) {
  return <p className={cn('text-sm text-slate-600', className)} {...props} />
}

export function CardContent({ className, ...props }) {
  return <div className={cn('text-sm text-slate-700 space-y-3', className)} {...props} />
}
