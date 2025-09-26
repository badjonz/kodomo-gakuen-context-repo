'use client'

import React from 'react'
import { useFontClass } from '@/hooks/useFontClass'
import { cn } from '@/utils/cn'

interface BodyWrapperProps {
  children: React.ReactNode
}

export default function BodyWrapper({ children }: BodyWrapperProps) {
  const fontClass = useFontClass()

  return (
    <div className={cn(fontClass, 'bg-light-2 text-dark-1 min-h-screen')}>
      {children}
    </div>
  )
}